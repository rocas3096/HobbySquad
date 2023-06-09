const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class UserGroup extends Model {}

UserGroup.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    group_id: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    User_idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    group_id1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "UserGroup",
    tableName: "user_group",
  }
);

module.exports = UserGroup;
