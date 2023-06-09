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
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Group",
  }
);

module.exports = Group;
