const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class HobbyTag extends Model {}

HobbyTag.init(
  {
    hobby_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "HobbyTag",
    tableName: "hobby_tag",
  }
);

module.exports = HobbyTag;
