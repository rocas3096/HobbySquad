const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Hobby = require('./Hobby');

const UserHobby = sequelize.define('UserHobby', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  hobby_id: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
});

User.belongsToMany(Hobby, {
  through: UserHobby,
  foreignKey: 'user_id',
  otherKey: 'hobby_id',
});
Hobby.belongsToMany(User, {
  through: UserHobby,
  foreignKey: 'hobby_id',
  otherKey: 'user_id',
});

module.exports = UserHobby;
