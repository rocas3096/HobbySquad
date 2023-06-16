const express = require("express");
const routes = require("./routes");
const livereload = require("livereload");
const hbs = require("hbs");
const path = require("path");
const connectLiveReload = require("connect-livereload");
const session = require("express-session");
const sequelize = require("./config/connection");
const { Op } = require("sequelize");
const { Group, User } = require("./models");
const { authorizedUser } = require("./middleware/authMiddleware");
const UserGroup = require("./models/userGroup");
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
const app = express();
const PORT = process.env.PORT || 3001;
app.use(connectLiveReload());
hbs.registerPartials(path.join(__dirname, "views/partials"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

app.get("/", async (req, res, next) => {
  const user = req.session;

  if (user.isLoggedIn) {
    let currentUser = await User.findByPk(user.user_id);
    console.log(currentUser);
    return res.render("landing", { currentUser });
  }

  res.render("landing");
});
app.get("/login", (req, res, next) => {
  if (req.session.isLoggedIn) {
    return res.redirect("/user-panel");
  }
  res.render("login");
});
app.get("/register", (req, res, next) => {
  if (req.session.isLoggedIn) {
    return res.redirect("/user-panel");
  }
  res.render("register");
});

app.get("/user-panel", authorizedUser, async (req, res, next) => {
  const user = req.session;
  const currentUser = await User.findByPk(user.user_id);
  res.render("userpanel", { currentUser });
});
app.get("/user-panel/search", authorizedUser, async (req, res, next) => {
  const user = req.session.user;
  const { q } = req.query;

  let results;
  try {
    if (!q || q.length === 0) {
      results = [];
    } else {
      results = await sequelize.query(
        "SELECT DISTINCT g.id, g.group_name,g.description, COUNT(TRIM(u.`UserId`)) AS user_count FROM `groups` g LEFT JOIN tags t ON g.id = t.group_id LEFT JOIN usergroups u ON g.id = u.`GroupId` WHERE TRIM(g.group_name) LIKE :searchTerm OR TRIM(t.name) LIKE :searchTerm GROUP BY g.id, g.group_name",
        {
          replacements: { searchTerm: `%${q}%` },
        }
      );
      results = results[0];
    }

    const searchData = {
      isSearching: true,
      quantity: results.length,
      searchEmpty: results.length === 0,
      term: q,
      results,
    };
    res.render("userpanel", { searchResults: searchData });
  } catch (error) {
    console.log(error);
  }
});
app.get("/user-panel/group/:id", async (req, res, next) => {
  const { id } = req.params;
  const user = req.session.user_id;
  const foundGroup = await Group.findByPk(id);
  const userBelongsToGroup = await UserGroup.findOne({
    where: { UserId: 12, GroupId: id },
  });
  if (userBelongsToGroup) {
    return res.render("userpanel", { foundGroup, userBelongsToGroup });
  }
  res.render("userpanel", { foundGroup });
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({ error: message, type: err.type });
});

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
