const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class Group extends Model {}

Group.init(
  {
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
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tag_hobby_tag_hobby_id: {
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
