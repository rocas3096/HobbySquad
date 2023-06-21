const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Tag extends Model {}

Tag.init(
  {
    name: { type: DataTypes.STRING(255), allowNull: false },
    group_id: { type: DataTypes.INTEGER, allowNull: false },
  },
  { sequelize, modelName: "Tag" }
);

module.exports = Tag;
