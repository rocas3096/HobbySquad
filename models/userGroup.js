const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Group = require('./Group');

const UserGroup = sequelize.define('UserGroup', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  group_id: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
});

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

module.exports = UserGroup;
