const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {}

User.init(
  {
    username: {
      type: DataTypes.STRING(55),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    indexes: [
      {
        unique: true,
        fields: ["username"],
      },
      {
        unique: true,
        fields: ["email"],
      },
      // Add other necessary indexes here, if any
    ],
  }
);

module.exports = User;
