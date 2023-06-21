const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class UserHasHobby extends Model {}

UserHasHobby.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    hobby_id: {
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
    modelName: "UserHasHobby",
    tableName: "user_has_hobby",
  }
);

module.exports = UserHasHobby;
