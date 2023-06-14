const UserGroup = require("../models/userGroup");

const userHasGroupData = [
  { user_id: 1, group_id: 1, group_tag_id: 1 },
  { user_id: 2, group_id: 1, group_tag_id: 2 },
  { user_id: 3, group_id: 1, group_tag_id: 3 },
  { user_id: 4, group_id: 2, group_tag_id: 4 },
  { user_id: 5, group_id: 2, group_tag_id: 5 },
  { user_id: 6, group_id: 3, group_tag_id: 6 },
  { user_id: 7, group_id: 4, group_tag_id: 7 },
  { user_id: 8, group_id: 5, group_tag_id: 4 },
  { user_id: 9, group_id: 6, group_tag_id: 3 },
  { user_id: 10, group_id: 7, group_tag_id: 3 },
  { user_id: 10, group_id: 8, group_tag_id: 3 },
  { user_id: 10, group_id: 9, group_tag_id: 3 },
  { user_id: 10, group_id: 10, group_tag_id: 3 },
];

const seedUserGroup = async () => {
  try {
    await UserGroup.bulkCreate(userHasGroupData);
    console.log("UserGroup seeded successfully");
  } catch (error) {
    console.error("Error seeding UserGroup:", error);
  }
};

module.exports = seedUserGroup;
