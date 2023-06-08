const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const Hobby = sequelize.define("Hobby", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  tags: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
});

module.exports = Hobby;
