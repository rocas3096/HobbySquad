const { Group } = require('../models');

const groups = [
  { id: 1, hobby_id: 'hobby1', group_id: 'group1' },
  { id: 2, hobby_id: 'hobby2', group_id: 'group2' },
  { id: 3, hobby_id: 'hobby3', group_id: 'group3' },
];

const seedGroups = async () => {
  try {
    await Group.bulkCreate(groups);
    console.log('Groups seeded successfully');
  } catch (error) {
    console.error('Error seeding groups:', error);
  }
};

module.exports = seedGroups;
