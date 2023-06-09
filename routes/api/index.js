const router = require('express').Router();
const userRoutes = require("./user-routes");
const groupRoutes = require("./group-routes");
const hobbyRoutes = require("./hobby-routes");
const tagRoutes = require("./tag-routes");

router.use('/users', userRoutes);
router.use('/groups', groupRoutes);
router.use('/hobbies', hobbyRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
