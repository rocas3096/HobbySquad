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
    tags: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Hobby",
  }
);

module.exports = Hobby;
