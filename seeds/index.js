const sequelize = require('./config/database');
const seedUsers = require('./seeds/users');
const seedGroups = require('./seeds/groups');
const seedHobbies = require('./seeds/hobbies');
const seedUserGroups = require('./seeds/userGroups');
const seedUserHobbies = require('./seeds/userHobbies');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedGroups();
    await seedHobbies();
    await seedUserGroups();
    await seedUserHobbies();
    console.log('Database seeding completed');
    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
