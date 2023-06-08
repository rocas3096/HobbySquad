const { UserGroup } = require('../models');

const userGroups = [
  { user_id: 1, group_id: 'group1', User_idUser: 1, group_id1: 1 },
  { user_id: 2, group_id: 'group2', User_idUser: 2, group_id1: 2 },
  { user_id: 3, group_id: 'group3', User_idUser: 3, group_id1: 3 },
];

const seedUserGroups = async () => {
  try {
    await UserGroup.bulkCreate(userGroups);
    console.log('UserGroups seeded successfully');
  } catch (error) {
    console.error('Error seeding userGroups:', error);
  }
};

module.exports = seedUserGroups;
