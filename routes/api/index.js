const router = require('express').Router();
const userRoutes = require('./user-routes');
const groupRoutes = require('./group-routes');
const hobbyRoutes = require('./hobby-routes');
const tagRoutes = require('./tag-routes');
const hobbyHasTagRoutes = require('./hobbyTag-routes');
const userHasGroupRoutes = require('./userGroup-routes');
const userHasHobbyRoutes = require('./userHobby-routes');

router.use('/users', userRoutes);
router.use('/groups', groupRoutes);
router.use('/hobbies', hobbyRoutes);
router.use('/tags', tagRoutes);
router.use('/hobby-has-tags', hobbyHasTagRoutes);
router.use('/user-has-groups', userHasGroupRoutes);
router.use('/user-has-hobbies', userHasHobbyRoutes);

module.exports = router;
