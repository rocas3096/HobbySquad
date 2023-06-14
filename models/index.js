const User = require("./user");
const Group = require("./group");
const Hobby = require("./hobby");
const HobbyHasTag = require("./hobbyTag");
const Tag = require("./tag");
const UserHasGroup = require("./userGroup");
const UserHasHobby = require("./userHobby");

// Associations

User.belongsToMany(Group, {
  through: { model: UserHasGroup, unique: false },
  foreignKey: "user_id",
  otherKey: "group_id",
  as: "Groups",
});
Group.belongsToMany(User, {
  through: { model: UserHasGroup, unique: false },
  foreignKey: "group_id",
  otherKey: "user_id",
  as: "Users",
});
UserHasGroup.belongsTo(User, {
  foreignKey: "user_id",
  as: "User",
});
UserHasGroup.belongsTo(Group, {
  foreignKey: "group_id",
  as: "Group",
});

// Group.belongsToMany(User, {
//   through: UserHasGroup,
//   foreignKey: "group_id",
//   otherKey: "user_id",
// });

User.belongsToMany(Hobby, {
  through: UserHasHobby,
  foreignKey: "user_id",
  otherKey: "hobby_id",
});
Hobby.belongsToMany(User, {
  through: UserHasHobby,
  foreignKey: "hobby_id",
  otherKey: "user_id",
});

Hobby.belongsToMany(Tag, {
  through: HobbyHasTag,
  foreignKey: "hobby_id",
  otherKey: "tag_id",
});
Tag.belongsToMany(Hobby, {
  through: HobbyHasTag,
  foreignKey: "tag_id",
  otherKey: "hobby_id",
});

Group.hasOne(Tag, {
  foreignKey: "id",
});
Tag.belongsTo(Group, {
  foreignKey: "id",
});

// Export the models
module.exports = {
  User,
  Group,
  Hobby,
  HobbyHasTag,
  Tag,
  UserHasGroup,
  UserHasHobby,
};
