require("dotenv").config();

const Sequelize = require("sequelize");

// Update the database configuration to use Heroku's environment variables
const sequelize = new Sequelize(
  // process.env.JAWSDB_URL || 
  process.env.DATABASE_URL,
  process.env.JAWSDB_USERNAME || process.env.DB_USER,
  process.env.JAWSDB_PASSWORD || process.env.DB_PASSWORD,
  {
    host: process.env.JAWSDB_HOST || "localhost",
    dialect: process.env.JAWSDB_DIALECT || "mysql",
    dialectOptions: {
      decimalNumbers: true,
    },
  }
);

module.exports = sequelize;
