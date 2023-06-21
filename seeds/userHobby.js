const  UserHobby = require("../models/userHobby");

const userHobbyData = [
  { user_id: 1, hobby_id: 1 },
  { user_id: 2, hobby_id: 2 },
  { user_id: 3, hobby_id: 3 },
];

const seedUserHobby = async () => {
  try {
    await UserHobby.bulkCreate(userHobbyData);
    console.log("UserHobby seeded successfully");
  } catch (error) {
    console.error("Error seeding UserHobby:", error);
  }
};

module.exports = seedUserHobby;
