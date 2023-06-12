const Tag = require("../models/tag");

const tagData = [
  { name: "Watercolor Painting" },
  { name: "Landscape Photography" },
  { name: "Indoor Gardening" },
  { name: "Baking" },
  { name: "Acoustic Guitar" },
  { name: "Fiction Writing" },
  { name: "Crocheting" },
  { name: "Wood Carving" },
  { name: "Trail Hiking" },
  { name: "Latin Dance" },
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
