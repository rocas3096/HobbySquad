 const Post = require("../models/post");

const postData = [
  {
    content: "This is my first post",
    user_id: 1,
    group_id: 1,
  },
  {
    content: "This is my first post in group 2",
    user_id: 1,
    group_id: 2,
  },
  {
    content: "This is my second post",
    user_id: 2,
    group_id: 1,
  },
  {
    content: "This is my second post in group 2",
    user_id: 2,
    group_id: 2,
  },
  // add more posts here as needed
];

const seedPosts = async () => {
  try {
    await Post.bulkCreate(postData);
    console.log("Posts seeded successfully");
  } catch (error) {
    console.error("Error seeding posts:", error);
  }
};

module.exports = seedPosts;
