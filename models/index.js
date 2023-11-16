const Group = require("./group");
const Post = require("./post");
const Tag = require("./tag");
const User = require("./user");
const UserGroup = require("./userGroup");

// Associations

// Group associations
Group.belongsTo(User, {
  foreignKey: "owner_id",
});
Group.hasOne(User, {
  foreignKey: "owner_id",
});
Tag.belongsTo(Group, { foreignKey: "group_id" });
Group.hasMany(Tag, { foreignKey: "group_id" });
Post.belongsTo(Group, { foreignKey: "group_id" });

// User associations
User.belongsToMany(Group, {
  through: UserGroup,
  foreignKey: "UserId",
});
UserGroup.belongsTo(User, { foreignKey: "UserId" });
Group.belongsToMany(User, {
  through: UserGroup,
  foreignKey: "GroupId",
});

// UserGroup associations
UserGroup.belongsTo(Group, { foreignKey: "GroupId" });

// Post associations
Post.belongsTo(User, { foreignKey: "user_id" });

// Export the models
module.exports = {
  User,
  Group,
  Tag,
  Post,
};
