const HobbyTag = require("../models/hobbyTag");

const hobbyTagData = [
  { hobby_id: 1, tag_id: 1 },
  { hobby_id: 2, tag_id: 2 },
  { hobby_id: 3, tag_id: 3 },
];

const seedHobbyTags = async () => {
  try {
    await HobbyTag.bulkCreate(hobbyTagData);
    console.log("HobbyTags seeded successfully");
  } catch (error) {
    console.error("Error seeding hobby tags:", error);
  }
};

module.exports = seedHobbyTags;
