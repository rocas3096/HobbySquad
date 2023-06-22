 const Group = require("./group");
const Post = require("./post");
const Tag = require("./tag");
const User = require("./user");
const UserGroup = require("./userGroup");
// const Post = require("./post");
// Associations

Group.belongsTo(User, {
  foreignKey: "owner_id",
});
Tag.belongsTo(Group, { foreignKey: "group_id" });
User.belongsToMany(Group, {
  through: UserGroup,
  foreignKey: "UserId",
});
Group.belongsToMany(User, {
  through: UserGroup,
  foreignKey: "GroupId",
});
Group.hasOne(User, {
  foreignKey: "owner_id",
});
UserGroup.hasMany(User, { foreignKey: "UserId" });
UserGroup.hasMany(Group, { foreignKey: "GroupId" });
Group.hasMany(Tag, { foreignKey: "group_id" });
Post.belongsTo(Group, { foreignKey: "group_id" });
Post.belongsTo(User, { foreignKey: "user_id" });
// Export the models
module.exports = {
  User,
  Group,
  Tag,
  Post,
};
