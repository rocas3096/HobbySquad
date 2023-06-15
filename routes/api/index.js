const router = require("express").Router();
const userRoutes = require("./user-routes");
const authRoutes = require("./auth-routes");
const groupRoutes = require("./group-routes");
const tagRoutes = require("./tag-routes");

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/groups", groupRoutes);
router.use("/tags", tagRoutes);

module.exports = router;
