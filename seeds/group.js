const { Group } = require("../models");

let groups = [
  {
    group_name: "Hiking Enthusiasts",
    description: "A group dedicated to exploring nature through hiking trails",
    owner_id: 1,
  },
  {
    group_name: "Photography Club",
    description:
      "Join us to capture beautiful moments and improve your photography skills",
    owner_id: 2,
  },
  {
    group_name: "Gourmet Cooking Society",
    description:
      "Discover the art of gourmet cooking with fellow food enthusiasts",
    owner_id: 3,
  },
  {
    group_name: "Guitar Jamming Crew",
    description:
      "Play your favorite tunes and jam with other guitarists in this group",
    owner_id: 4,
  },
  {
    group_name: "Writers Unite",
    description:
      "A community of writers sharing their stories and providing feedback",
    owner_id: 5,
  },
  {
    group_name: "Artistic Painters",
    description:
      "Express your creativity through painting and learn from fellow artists",
    owner_id: 1,
  },
  {
    group_name: "Fitness Fanatics",
    description: "Stay motivated and achieve your fitness goals in this group",
    owner_id: 2,
  },
  {
    group_name: "Bookworms Book Club",
    description: "Explore the world of literature with fellow book lovers",
    owner_id: 3,
  },
  {
    group_name: "Yoga for Mind and Body",
    description:
      "Join us for relaxing yoga sessions and improve your overall well-being",
    owner_id: 4,
  },
  {
    group_name: "Crafting Corner",
    description:
      "Get crafty and share your crafting projects with other artisans",
    owner_id: 5,
  },
];

const seedGroups = async () => {
  try {
    await Group.bulkCreate(groups);
    console.log("Groups seeded successfully");
  } catch (error) {
    console.error("Error seeding groups:", error);
  }
};

module.exports = seedGroups;
