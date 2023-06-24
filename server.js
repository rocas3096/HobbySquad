//Required modules
const express = require("express");
const hbs = require("hbs");
const path = require("path");
const session = require("express-session");
const util = require("util");
const NodeCache = require("node-cache");
let userCache = new NodeCache();
let groupCache = new NodeCache();

//Routes and models
const routes = require("./routes");
const sequelize = require("./config/connection");
const { Group, User, Post, Tag } = require("./models");
const UserGroup = require("./models/userGroup");
const { authorizedUser } = require("./middleware/authMiddleware");

//Express app setup
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(
  session({
    secret: "process.env.SESSION_KEY",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views/partials"));

// Live Reload
// const livereload = require("livereload");
// const connectLiveReload = require("connect-livereload");
// const liveReloadServer = livereload.createServer();
// liveReloadServer.server.once("connection", () => {
//   setTimeout(() => {
//     liveReloadServer.refresh("/");
//   }, 100);
// });
// app.use(connectLiveReload());

// Routes
app.use(routes);

// Landing Page
app.get("/", async (req, res, next) => {
  const user = req.session;

  if (user.isLoggedIn) {
    let currentUser = await User.findByPk(user.user_id);
    console.log(currentUser);
    return res.render("landing", { currentUser });
  }

  res.render("landing");
});

// Login Page
app.get("/login", (req, res, next) => {
  if (req.session.isLoggedIn) {
    return res.redirect("/user-panel");
  }
  res.render("login");
});

// Registration Page
app.get("/register", (req, res, next) => {
  if (req.session.isLoggedIn) {
    return res.redirect("/user-panel");
  }
  res.render("register");
});

// User Panel
let userCountsCache = {};
let groupImagesCache = {};

app.get("/user-panel", authorizedUser, async (req, res, next) => {
  const user = req.session;
  const userId = user.user_id;

  // Retrieve user data from cache or database
  let currentUser = userCache.get(userId);
  if (!currentUser) {
    currentUser = await User.findByPk(userId);
    userCache.set(userId, currentUser);
  }

  const { q } = req.query;

  // Retrieve exploreGroups from cache or database
  let exploreGroups = groupCache.get("exploreGroups");
  if (!exploreGroups) {
    exploreGroups = await Group.findAll({
      order: sequelize.literal("RAND()"),
    });
    groupCache.set("exploreGroups", exploreGroups);
  }

  // Retrieve suggestionGroups from cache or database
  let suggestionGroups = groupCache.get("suggestionGroups");
  if (!suggestionGroups) {
    suggestionGroups = await Group.findAll({
      order: sequelize.literal("RAND()"),
      limit: 8,
    });
    groupCache.set("suggestionGroups", suggestionGroups);
  }

  // Retrieve user group memberships from cache or database
  const userGroupMemberships = await UserGroup.findAll({
    where: {
      UserId: userId,
      GroupId: exploreGroups.map((group) => group.id),
    },
  });

  for (let group of exploreGroups) {
    let tags, userGroup, memberCount;

    if (group.id in userCountsCache) {
      memberCount = userCountsCache[group.id];
    } else {
      memberCount = await UserGroup.count({
        distinct: true,
        col: "UserId",
        where: {
          GroupId: group.id,
        },
      });
      userCountsCache[group.id] = memberCount;
    }

    if (group.id in groupImagesCache) {
      group.image = groupImagesCache[group.id];
    } else {
      tags = await Tag.findAll({ where: { group_id: group.id } });
      group.image = `https://source.unsplash.com/featured?${tags[0].name}`;
      groupImagesCache[group.id] = group.image;
    }

    userGroup = userGroupMemberships.find(
      (membership) => membership.GroupId === group.id
    );

    group.num_of_users = memberCount;
    group.currentUser = req.session.user_id;

    if (userGroup) {
      group.userBelongsToGroup = true;
      await group.save();
    } else {
      group.userBelongsToGroup = false;
      await group.save();
    }
  }

  let num_of_groups = exploreGroups.length;
  try {
    if (!q || q.length === 0) {
      results = [];
    } else {
      results = await sequelize.query(
        "SELECT DISTINCT g.id, g.group_name, g.description, COALESCE(u.user_count, 0) AS user_count FROM `groups` g LEFT JOIN ( SELECT GroupId, COUNT(*) AS user_count FROM usergroups GROUP BY GroupId ) u ON g.id = u.GroupId LEFT JOIN tags t ON g.id = t.group_id WHERE TRIM(g.group_name) LIKE :searchTerm OR TRIM(t.name) LIKE :searchTerm;",
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

    res.render("userpanel", {
      currentUser,
      user,
      searchResults: searchData,
      data: exploreGroups,
      num_of_groups,
      suggestionGroups,
      userPanelPage: true,
    });
  } catch (error) {
    console.log(error);
  }
});

// Group Page
app.get("/user-panel/group/:id", authorizedUser, async (req, res, next) => {
  const { id } = req.params;
  const tags = await Tag.findAll({ where: { group_id: id } });
  const user = req.session;
  const currentUser = await User.findByPk(user.user_id);
  const currentGroupsPost = await Post.findAll({
    attributes: ["content", "createdAt"],
    order: [["createdAt", "DESC"]],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
    where: {
      group_id: id,
    },
  });
  currentGroupsPost.forEach((post) => {
    const firstLetter = post.User.username[0].toUpperCase();
    let date = new Date(post.createdAt);
    post.date = `${date.toDateString()} ${date.toLocaleTimeString()}`;

    post.initial = firstLetter;
  });
  const foundGroup = await Group.findByPk(id);
  const groupMembers = await UserGroup.count({ where: { GroupId: id } });
  const numOfGroups = await Group.findAndCountAll();
  foundGroup.image = `https://source.unsplash.com/featured?${tags[0].name}`;
  foundGroup.user_count = groupMembers;
  foundGroup.group_count = numOfGroups.count;
  if (!req.session.isLoggedIn) {
    return res.redirect("/");
  }
  const userBelongsToGroup = await UserGroup.findOne({
    where: { UserId: user.user_id, GroupId: id },
  });

  const options = {
    foundGroup,
    viewingGroup: true,
    userBelongsToGroup,
    groupMembers,
    user,
    currentGroupsPost,
    currentUser,
  };

  res.render("userpanel", options);
});

// Add User to Group
app.get(
  "/user-panel/group/:group_id/user/:user_id",
  authorizedUser,
  async (req, res, next) => {
    const { group_id, user_id } = req.params;
    const foundUser = await User.findByPk(user_id);
    const foundGroup = await Group.findByPk(group_id);

    if (foundGroup && foundUser) {
      await foundGroup.addUser(foundUser);
      await foundUser.addGroup(foundGroup);
      res.redirect(`/user-panel/group/${foundGroup.id}`);
    }
  }
);

// User's Groups Page
app.get("/user-panel/groups", authorizedUser, async (req, res, next) => {
  const user = req.session;
  const query = `
SELECT
  g.group_name,
  g.description,
  g.id,
  COUNT(DISTINCT ug.UserId) AS num_of_users,
  CASE WHEN g.owner_id = :userId THEN true ELSE false END AS isOwner
FROM \`groups\` g
JOIN usergroups ug ON ug.GroupId = g.id
WHERE ug.GroupId IN (
  SELECT GroupId
  FROM usergroups
  WHERE UserId = :userId
)
GROUP BY g.group_name, g.description, g.id;
`;
  let result = await sequelize.query(query, {
    replacements: { userId: req.session.user_id },
    type: sequelize.QueryTypes.SELECT,
  });

  let num_of_groups = result.length;
  for (let item of result) {
    const tags = await Tag.findAll({ where: { group_id: item.id } });
    item.image = `https://source.unsplash.com/featured?${tags[0].name}`;
  }
  console.log(result);
  res.render("userpanel", {
    num_of_groups,
    data: result,
    user,
    groupsPage: true,
  });
});

// Privacy Policy Page
app.get("/privacy", (req, res, next) => {
  res.render("privacypolicy");
});

// Terms of Service Page
app.get("/terms", (req, res, next) => {
  res.render("termsofservice");
});

// Logout
app.get("/logout", (req, res, next) => {
  // Logs user out
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    // Redirect the user to the login page after logout
    res.redirect("/login");
  });
});

// Invalidating cache
app.get("/invalidate-cache", authorizedUser, async (req, res) => {
  try {
    userCountsCache = {};
    groupImagesCache = {};
    userCache.flushAll();
    groupCache.flushAll();

    const newGroupId = req.session.newGroupId;
    res.redirect(`/user-panel/group/${newGroupId}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Remove User from Group
app.delete(
  "/user-panel/group/:groupId/user/:userId",
  async (req, res, next) => {
    try {
      const groupId = req.params.groupId;
      const userId = req.params.userId;

      await UserGroup.destroy({
        where: {
          GroupId: groupId,
          UserId: userId,
        },
      });

      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }
);

// Error Handling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({ error: message, type: err.type });
});

// Database connection
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Unable to connect to the database:", err);
  });
