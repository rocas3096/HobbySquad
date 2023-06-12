const Group = require("../models/group");

const groupData = [
  { group_name: "Adventure Hiking Group", tag_id: 1 },
  { group_name: "Fitness Bootcamp Group", tag_id: 2 },
  { group_name: "Yoga Enthusiasts Group", tag_id: 3 },
  { group_name: "Cycling Club Group", tag_id: 1 },
  { group_name: "Running Buddies Group", tag_id: 2 },
  { group_name: "Active Seniors Group", tag_id: 3 },
  { group_name: "Nature Lovers Group", tag_id: 1 },
  { group_name: "Dance Fever Group", tag_id: 2 },
  { group_name: "Outdoor Adventures Group", tag_id: 3 },
  { group_name: "Mindful Meditation Group", tag_id: 1 },
];

const seedGroups = async () => {
  try {
    await Group.bulkCreate(groupData);
    console.log("Groups seeded successfully");
  } catch (error) {
    console.error("Error seeding groups:", error);
  }
};

module.exports = seedGroups;
