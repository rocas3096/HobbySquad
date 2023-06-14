const express = require("express");
const routes = require("./routes");
const livereload = require("livereload");
const hbs = require("hbs");
const path = require("path");
const connectLiveReload = require("connect-livereload");
const session = require("express-session");
// import sequelize connection
const sequelize = require("./config/connection");
const { Op } = require("sequelize");
const { Tag, Group, User, UserHasGroup } = require("./models");
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
app.get("/", (req, res, next) => {
  res.render("landing", { name: "corey" });
});
app.get("/login", (req, res, next) => {
  res.render("login");
});
app.get("/register", (req, res, next) => {
  res.render("register");
});
app.get("/user-panel", async (req, res, next) => {
  const user = req.session.user;
  const { q } = req.query;

  res.render("userpanel", { user });
});
app.get("/user-panel/search", async (req, res, next) => {
  const user = req.session.user;
  const { q } = req.query;

  // let results = await Group.findAll({
  //   where: {
  //     [Op.or]: {
  //       group_name: {
  //         [Op.like]: `%${q}%`,
  //       },
  //       "$Tag.name$": `%${q}%`,
  //     },
  //   },
  //   include: [{ model: Tag }],
  // });
  let results;
  if (!q || q.length === 0) {
    results = [];
  } else {
    results = await Group.findAll({
      attributes: [
        "id",
        "group_name",
        "tag_id",
        [
          sequelize.literal(
            `(SELECT COUNT(*) FROM user_has_group WHERE user_has_group.group_id = Group.id)`
          ),
          "userCount",
        ],
      ],
      where: {
        [Op.or]: [
          { group_name: { [Op.like]: `%${q}%` } },
          { "$Tag.name$": { [Op.like]: `%${q}%` } },
        ],
      },
      include: [
        {
          model: Tag,
          required: false,
          where: {
            name: {
              [Op.like]: `%${q}%`,
            },
          },
        },
      ],
      group: [
        "Group.id",
        "Group.group_name",
        "Group.tag_id",
        "Tag.id",
        "Tag.name",
      ],
    });
    console.log(
      results.forEach((d) => {
        console.log(d.dataValues.userCount);
      })
    );
  }

  const searchData = {
    isSearching: true,
    quantity: results.length,
    searchEmpty: results.length === 0,
    term: q,
    results,
  };
  res.render("userpanel", { searchResults: searchData });
});
app.get("/user-panel/group/:id", async (req, res, next) => {
  const { id } = req.params;
  const foundGroup = await Group.findByPk(id);
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
