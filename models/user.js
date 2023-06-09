const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class UserModel extends Model {}

UserModel.init(
  {
    idUser: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      field: "idUser",
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    user_hobby_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "user_hobby_user_id",
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "UserModel",
  }
);

module.exports = UserModel;
