const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    group_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "Post",
  }
);
module.exports = Post;
