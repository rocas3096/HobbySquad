const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("./user");
const Hobby = require("./hobby");

class UserHobby extends Model {}

UserHobby.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
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
  }
);

User.belongsToMany(Hobby, {
  through: UserHobby,
  foreignKey: "user_id",
  otherKey: "hobby_id",
});
Hobby.belongsToMany(User, {
  through: UserHobby,
  foreignKey: "hobby_id",
  otherKey: "user_id",
});

module.exports = UserHobby;
