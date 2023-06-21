const User = require("../models/user");

const userData = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
  { username: "user3", password: "password3" },
];

const seedUsers = async () => {
  try {
    await User.bulkCreate(userData);
    console.log("Users seeded successfully");
  } catch (error) {
    console.error("Error seeding users:", error);
  }
};

module.exports = seedUsers;
