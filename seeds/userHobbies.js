const UserHobby = require("../models/userHobby");

const userHobbyData = [
  { user_id: 1, hobby_id: "hobby1" },
  { user_id: 2, hobby_id: "hobby2" },
  { user_id: 3, hobby_id: "hobby3" },
];

const seedUserHobbies = async () => {
  try {
    await UserHobby.bulkCreate(userHobbyData);
    console.log("User hobbies seeded successfully");
  } catch (error) {
    console.error("Error seeding user hobbies:", error);
  }
};

module.exports = seedUserHobbies;
