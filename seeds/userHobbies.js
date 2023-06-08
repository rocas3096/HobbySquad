const { UserHobby } = require('../models');

const userHobbies = [
  { user_id: 1, hobby_id: 'hobby1' },
  { user_id: 2, hobby_id: 'hobby2' },
  { user_id: 3, hobby_id: 'hobby3' },
];

const seedUserHobbies = async () => {
  try {
    await UserHobby.bulkCreate(userHobbies);
    console.log('UserHobbies seeded successfully');
  } catch (error) {
    console.error('Error seeding userHobbies:', error);
  }
};

module.exports = seedUserHobbies;
