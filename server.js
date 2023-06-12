const express = require("express");
const routes = require("./routes");
const livereload = require("livereload");
const hbs = require("hbs");
const path = require("path");
const connectLiveReload = require("connect-livereload");
// import sequelize connection
const sequelize = require("./config/connection");
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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);
app.get("/", (req, res, next) => {
  res.render("landing", { name: "corey" });
});
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({ error: message });
});
// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
