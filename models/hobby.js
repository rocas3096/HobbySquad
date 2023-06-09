const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class Hobby extends Model {}

Hobby.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    user_hobby_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    modelName: "Hobby",
    tableName: "hobby",
  }
);

module.exports = Hobby;
