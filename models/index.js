const sequelize = require("../config/connection");
const { DataTypes } = require("sequelize");

const UserModel = require("./user");
const Group = require("./group");
const Hobby = require("./hobby");
const UserGroup = require("./userGroup");
const UserHobby = require("./userHobby");

const defineModels = async () => {
  const User = UserModel(sequelize, DataTypes);
  
  User.hasMany(UserHobby, { foreignKey: "user_id" });
  UserHobby.belongsTo(User, { foreignKey: "user_id" });

  Hobby.hasMany(UserHobby, { foreignKey: "hobby_id" });
  UserHobby.belongsTo(Hobby, { foreignKey: "hobby_id" });

  User.belongsToMany(Group, {
    through: UserGroup,
    foreignKey: "user_id",
    otherKey: "group_id",
  });
  Group.belongsToMany(User, {
    through: UserGroup,
    foreignKey: "group_id",
    otherKey: "user_id",
  });

  await sequelize.sync({ alter: true }); // Sync the models with the database
  
  return {
    User,
    Group,
    Hobby,
    UserGroup,
    UserHobby,
  };
};

module.exports = defineModels;
