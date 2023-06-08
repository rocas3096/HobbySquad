const { User } = require('../models');

const users = [
  { idUser: 1, username: 'user1', password: 'password1' },
  { idUser: 2, username: 'user2', password: 'password2' },
  { idUser: 3, username: 'user3', password: 'password3' },
];

const seedUsers = async () => {
  try {
    await User.bulkCreate(users);
    console.log('Users seeded successfully');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};

module.exports = seedUsers;
