const { Group } = require("../models");

const groupData = [
  { id: 1, hobby_id: "hobby1", group_id: "group1", tag_id: 1, tag_hobby_tag_hobby_id: 1 },
  { id: 2, hobby_id: "hobby2", group_id: "group2", tag_id: 2, tag_hobby_tag_hobby_id: 2 },
  { id: 3, hobby_id: "hobby3", group_id: "group3", tag_id: 3, tag_hobby_tag_hobby_id: 3 },
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
