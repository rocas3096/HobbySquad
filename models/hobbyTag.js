const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class HobbyTag extends Model {}

HobbyTag.init(
  {
    hobby_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    tag_id: {
      type: DataTypes.STRING(45),
      allowNull: true,
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
