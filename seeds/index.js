const sequelize = require("../config/connection");
const seedUsers = require("./users");
const seedGroups = require("./groups");
const seedHobbies = require("./hobbies");
const seedUserGroups = require("./userGroups");
const seedUserHobbies = require("./userHobbies");
const seedTags = require("./tag");
const seedHobbyTags = require("./hobbyTag");

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedGroups();
    await seedHobbies();
    await seedUserGroups();
    await seedUserHobbies();
    await seedTags();
    await seedHobbyTags();
    console.log("Database seeding completed");
    process.exit();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(0);
  }
};

seedAll();
