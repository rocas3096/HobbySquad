const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class UserHasGroup extends Model {}

UserHasGroup.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    group_tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "UserHasGroup",
    tableName: "user_has_group",
  }
);

module.exports = UserHasGroup;

