const Tag = require("../models/tag");

const tagData = [
  { name: "Tag 1" },
  { name: "Tag 2" },
  { name: "Tag 3" },
];

const seedTags = async () => {
  try {
    await Tag.bulkCreate(tagData);
    console.log("Tags seeded successfully");
  } catch (error) {
    console.error("Error seeding tags:", error);
  }
};

module.exports = seedTags;
