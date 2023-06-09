const sequelize = require("../config/connection");
const { DataTypes } = require("sequelize");

const UserModel = require("./user");
const Group = require("./group");
const Hobby = require("./hobby");
const UserGroup = require("./userGroup");
const UserHobby = require("./userHobby");
const Tag = require("./tag");
const HobbyTag = require("./hobbyTag");

const defineModels = async () => {
  const User = UserModel.init(sequelize, DataTypes);
  const Tag = Tag.init(sequelize, DataTypes);
  const HobbyTag = HobbyTag.init(sequelize, DataTypes);

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

  // Define associations for Tag and HobbyTag
  Tag.hasMany(HobbyTag, { foreignKey: "tag_id" });
  HobbyTag.belongsTo(Tag, { foreignKey: "tag_id" });

  Hobby.hasMany(HobbyTag, { foreignKey: "hobby_id" });
  HobbyTag.belongsTo(Hobby, { foreignKey: "hobby_id" });

  await sequelize.sync({ alter: true }); // Sync the models with the database

  return {
    User,
    Group,
    Hobby,
    UserGroup,
    UserHobby,
    Tag,
    HobbyTag,
  };
};

module.exports = defineModels;
