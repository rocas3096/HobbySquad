const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

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
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Group",
    tableName: "group",
  }
);

module.exports = Group;

