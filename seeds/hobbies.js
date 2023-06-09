const Hobby = require("../models/hobby");

const hobbyData = [
  { id: 1, title: "Hobby 1", user_hobby_user_id: 1, hobby_tag_hobby_id: 1 },
  { id: 2, title: "Hobby 2", user_hobby_user_id: 2, hobby_tag_hobby_id: 2 },
  { id: 3, title: "Hobby 3", user_hobby_user_id: 3, hobby_tag_hobby_id: 3 },
];

const seedHobbies = async () => {
  try {
    await Hobby.bulkCreate(hobbyData);
    console.log("Hobbies seeded successfully");
  } catch (error) {
    console.error("Error seeding hobbies:", error);
  }
};

module.exports = seedHobbies;
