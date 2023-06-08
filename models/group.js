const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Group = sequelize.define('Group', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  hobby_id: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  group_id: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
});

module.exports = Group;
