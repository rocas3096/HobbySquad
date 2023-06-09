const UserGroup = require("../models/userGroup");

const userGroupData = [
  { user_id: 1, group_id: "group1", User_idUser: 1, group_id1: 1 },
  { user_id: 2, group_id: "group2", User_idUser: 2, group_id1: 2 },
  { user_id: 3, group_id: "group3", User_idUser: 3, group_id1: 3 },
];

const seedUserGroups = async () => {
  try {
    await UserGroup.bulkCreate(userGroupData);
    console.log("User groups seeded successfully");
  } catch (error) {
    console.error("Error seeding user groups:", error);
  }
};

module.exports = seedUserGroups;
