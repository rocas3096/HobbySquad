const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/connection");

class Hobby extends Model {}

Hobby.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
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
    tableName: "hobby",
  }
);

module.exports = Hobby;
