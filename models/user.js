const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  idUser: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
});

module.exports = User;
