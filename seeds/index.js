 const sequelize = require("../config/connection");
const seedUsers = require("./user");
const seedGroups = require("./group");
const seedHobbies = require("./hobby");
const seedHobbyHasTag = require("./hobbyTag");
const seedTags = require("./tag");
const seedUserGroup = require("./userGroup");
const seedUserHobby = require("./userHobby");

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedGroups();
    await seedHobbies();
    await seedHobbyHasTag();
    await seedTags();
    await seedUserGroup();
    await seedUserHobby();
    console.log("Database seeding completed");
    process.exit();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(0);
  }
};

seedAll();
