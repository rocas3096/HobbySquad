const Group = require("../models/group");

const groupData = [
  { group_name: "Group 1", tag_id: 1 },
  { group_name: "Group 2", tag_id: 2 },
  { group_name: "Group 3", tag_id: 3 },
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

