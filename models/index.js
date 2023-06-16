const Group = require("./group");
const Tag = require("./tag");
const User = require("./user");
const UserGroup = require("./userGroup");
const Post = require("./post")
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
Post.belongsTo(Group, { foreignKey: "group_id" });
User.hasMany(Post, { foreignKey: "UserId"});
Group.hasMany(Post, {foreignKey: "PostId"});
UserGroup.hasMany(User, { foreignKey: "UserId" });
UserGroup.hasMany(Group, { foreignKey: "GroupId" });
Group.hasMany(Tag, { foreignKey: "group_id" });
// Export the models
module.exports = {
  User,
  Group,
  Tag,
  Post,
};
