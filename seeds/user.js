const User = require("../models/user");

const userData = [
  {
    username: "johnsmith",
    email: "johnsmith@example.com",
    password: "p@ssw0rd!",
  },
  { username: "janedoe", email: "janedoe@example.com", password: "s3cur3p@ss" },
  {
    username: "mikejones",
    email: "mikejones@example.com",
    password: "p@$$w0rd123",
  },
  {
    username: "sarahbrown",
    email: "sarahbrown@example.com",
    password: "mySecretPassword",
  },
  {
    username: "alexwilson",
    email: "alexwilson@example.com",
    password: "p@ssw0rd!",
  },
  {
    username: "emilymartin",
    email: "emilymartin@example.com",
    password: "secur3d@t@",
  },
  {
    username: "davidlee",
    email: "davidlee@example.com",
    password: "p@ssw0rd123",
  },
  {
    username: "lisasmith",
    email: "lisasmith@example.com",
    password: "mySecretPassword",
  },
  {
    username: "ryanmiller",
    email: "ryanmiller@example.com",
    password: "p@$$w0rd!",
  },
  {
    username: "jessicawood",
    email: "jessicawood@example.com",
    password: "secur3d@t@",
  },
];

console.log(userData);

const seedUsers = async () => {
  try {
    await User.bulkCreate(userData);
    console.log("Users seeded successfully");
  } catch (error) {
    console.error("Error seeding users:", error);
  }
};

module.exports = seedUsers;
