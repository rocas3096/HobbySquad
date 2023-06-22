const { User, Group } = require("../models");

const seedUsersAndGroups = async () => {
  try {
    // Create users and groups

    // ...

    // Create associations between users and groups
    const userIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const groupIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (const userId of userIds) {
      const user = await User.findByPk(userId);
      for (const groupId of groupIds) {
        const group = await Group.findByPk(groupId);
        await user.addGroup(group);
        await group.addUser(user);
      }
    }

    console.log("Associations seeded successfully");
  } catch (error) {
    console.error("Error seeding associations:", error);
  }
};
module.exports = seedUsersAndGroups;
