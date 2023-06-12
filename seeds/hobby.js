const Hobby = require("../models/hobby");

const hobbyData = [
  { title: "Painting" },
  { title: "Photography" },
  { title: "Gardening" },
  { title: "Cooking" },
  { title: "Playing Guitar" },
  { title: "Writing" },
  { title: "Knitting" },
  { title: "Woodworking" },
  { title: "Hiking" },
  { title: "Dancing" },
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
