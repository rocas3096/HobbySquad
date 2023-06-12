const User = require("../models/user");

const userData = [
  { username: "johnsmith", password: "p@ssw0rd!" },
  { username: "janedoe", password: "s3cur3p@ss" },
  { username: "mikejones", password: "p@$$w0rd123" },
  { username: "sarahbrown", password: "mySecretPassword" },
  { username: "alexwilson", password: "p@ssw0rd!" },
  { username: "emilymartin", password: "secur3d@t@" },
  { username: "davidlee", password: "p@ssw0rd123" },
  { username: "lisasmith", password: "mySecretPassword" },
  { username: "ryanmiller", password: "p@$$w0rd!" },
  { username: "jessicawood", password: "secur3d@t@" },
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
