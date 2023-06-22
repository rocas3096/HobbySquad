 const router = require("express").Router();
const userRoutes = require("./user-routes");
const authRoutes = require("./auth-routes");
const groupRoutes = require("./group-routes");
const tagRoutes = require("./tag-routes");
const postRoutes = require("./post-routes");

router.use("/posts", postRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/groups", groupRoutes);
router.use("/tags", tagRoutes);

module.exports = router;
