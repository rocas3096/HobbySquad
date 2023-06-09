const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class TagModel extends Model {}

TagModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    hobby_tag_hobby_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "TagModel",
    tableName: "tag",
  }
);

module.exports = TagModel;