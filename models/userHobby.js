const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class UserHobby extends Model {}

UserHobby.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    hobby_id: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "UserHobby",
    tableName: "user_hobby",
  }
);

module.exports = UserHobby;
