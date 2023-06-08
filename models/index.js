const sequelize = require('../config/database');
const User = require('./User');
const Group = require('./Group');
const Hobby = require('./Hobby');
const UserGroup = require('./UserGroup');
const UserHobby = require('./UserHobby');

User.hasMany(UserHobby, { foreignKey: 'user_id' });
UserHobby.belongsTo(User, { foreignKey: 'user_id' });

Hobby.hasMany(UserHobby, { foreignKey: 'hobby_id' });
UserHobby.belongsTo(Hobby, { foreignKey: 'hobby_id' });

User.belongsToMany(Group, {
  through: UserGroup,
  foreignKey: 'user_id',
  otherKey: 'group_id',
});
Group.belongsToMany(User, {
  through: UserGroup,
  foreignKey: 'group_id',
  otherKey: 'user_id',
});

sequelize.sync({ alter: true }); // Sync the models with the database

module.exports = {
  User,
  Group,
  Hobby,
  UserGroup,
  UserHobby,
};
