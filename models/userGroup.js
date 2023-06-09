const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("./user");
const Group = require("./group");

class UserGroup extends Model {}

UserGroup.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    group_id: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "UserGroup",
  }
);

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

module.exports = UserGroup;
