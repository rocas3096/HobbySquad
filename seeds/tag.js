const Tag = require("../models/tag");

let tags = [
  { name: "Hiking", group_id: 1 },
  { name: "Outdoor Adventures", group_id: 1 },
  { name: "Nature Exploration", group_id: 1 },
  { name: "Photography", group_id: 2 },
  { name: "Landscape", group_id: 2 },
  { name: "Portraits", group_id: 2 },
  { name: "Cooking", group_id: 3 },
  { name: "Gourmet Recipes", group_id: 3 },
  { name: "International Cuisine", group_id: 3 },
  { name: "Guitar", group_id: 4 },
  { name: "Acoustic", group_id: 4 },
  { name: "Electric", group_id: 4 },
  { name: "Writing", group_id: 5 },
  { name: "Fiction", group_id: 5 },
  { name: "Poetry", group_id: 5 },
  { name: "Art", group_id: 6 },
  { name: "Painting", group_id: 6 },
  { name: "Drawing", group_id: 6 },
  { name: "Fitness", group_id: 7 },
  { name: "Workout", group_id: 7 },
  { name: "Yoga", group_id: 7 },
  { name: "Book Club", group_id: 8 },
  { name: "Literature", group_id: 8 },
  { name: "Bestsellers", group_id: 8 },
  { name: "Yoga", group_id: 9 },
  { name: "Mindfulness", group_id: 9 },
  { name: "Wellness", group_id: 9 },
  { name: "Crafting", group_id: 10 },
  { name: "Knitting", group_id: 10 },
  { name: "Paper Crafts", group_id: 10 },
];
const seedTags = async () => {
  try {
    await Tag.bulkCreate(tags);
    console.log("tags created");
  } catch (error) {
    console.error("tags not created", error);
  }
};
module.exports = seedTags;
