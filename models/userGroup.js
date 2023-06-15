const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class UserGroup extends Model {}

UserGroup.init({}, { sequelize, modelName: "UserGroup" });

module.exports = UserGroup;
