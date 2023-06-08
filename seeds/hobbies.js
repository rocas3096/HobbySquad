const { Hobby } = require('../models');

const hobbies = [
  { id: 1, title: 'Hobby 1', tags: 'tag1,tag2', user_hobby_user_id: 1 },
  { id: 2, title: 'Hobby 2', tags: 'tag3,tag4', user_hobby_user_id: 2 },
  { id: 3, title: 'Hobby 3', tags: 'tag5,tag6', user_hobby_user_id: 3 },
];

const seedHobbies = async () => {
  try {
    await Hobby.bulkCreate(hobbies);
    console.log('Hobbies seeded successfully');
  } catch (error) {
    console.error('Error seeding hobbies:', error);
  }
};

module.exports = seedHobbies;
