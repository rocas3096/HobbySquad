const sequelize = require("../config/connection");
const seedUsers = require("./user");
const seedGroups = require("./group");
const seedTags = require("./tag");
const seedUsersAndGroups = require("./userGroup");
const seedPosts = require("./post");
const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedGroups();
    await seedUsersAndGroups();
    await seedTags();
    await seedPosts();

    console.log("Database seeding completed");
    process.exit();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(0);
  }
};

seedAll();
