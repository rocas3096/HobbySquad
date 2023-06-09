const Hobby = require("../models/hobby");

const hobbyData = [
  { title: "Hobby 1" },
  { title: "Hobby 2" },
  { title: "Hobby 3" },
];

const seedHobbies = async () => {
  try {
    await Hobby.bulkCreate(hobbyData);
    console.log("Hobbies seeded successfully");
  } catch (error) {
    console.error("Error seeding hobbies:", error);
  }
};

module.exports = seedHobbies;
