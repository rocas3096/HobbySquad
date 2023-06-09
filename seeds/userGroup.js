const UserGroup = require("../models/userGroup");

const userGroupData = [
  { user_id: 1, group_id: 1, group_tag_id: 1 },
  { user_id: 2, group_id: 2, group_tag_id: 2 },
  { user_id: 3, group_id: 3, group_tag_id: 3 },
];

const seedUserGroup = async () => {
  try {
    await UserGroup.bulkCreate(userGroupData);
    console.log("UserGroup seeded successfully");
  } catch (error) {
    console.error("Error seeding UserGroup:", error);
  }
};

module.exports = seedUserGroup;
