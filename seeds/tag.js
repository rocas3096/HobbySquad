const Tag = require("../models/tag");

const tagData = [
  { id: 1, name: "Tag 1", hobby_tag_hobby_id: 1 },
  { id: 2, name: "Tag 2", hobby_tag_hobby_id: 2 },
  { id: 3, name: "Tag 3", hobby_tag_hobby_id: 3 },
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
