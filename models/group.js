const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("./user");
class Group extends Model {}
Group.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    group_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Group",
  }
);
module.exports = Group;
