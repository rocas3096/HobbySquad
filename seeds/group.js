const { Group } = require("../models");

let groups = [
  {
    group_name: "Hiking Enthusiasts",
    description:
      "A group dedicated to exploring and appreciating the beauty of nature through adventurous hiking trails, discovering hidden gems, connecting with fellow nature lovers, and embracing the serenity of the great outdoors. Join us for unforgettable experiences in the heart of nature, where you can challenge yourself, breathe in the fresh air, and immerse yourself in stunning landscapes that leave you in awe.",
    owner_id: 1,
  },
  {
    group_name: "Photography Club",
    description:
      "Join our vibrant photography club and embark on a visual journey to capture breathtaking moments, unleash your creativity, and expand your photography skills. Through engaging workshops, immersive photo walks, and collaborative projects, you'll discover new perspectives, techniques, and subjects to photograph. Connect with like-minded individuals, share your passion for visual storytelling, and let your creativity shine through captivating images that tell unique stories.",
    owner_id: 2,
  },
  {
    group_name: "Gourmet Cooking Society",
    description:
      "Welcome to the world of culinary excellence! The Gourmet Cooking Society is a community of passionate food enthusiasts who come together to explore the art of gourmet cooking. Dive into a world of exquisite flavors, unique ingredients, and culinary traditions from around the globe. From mastering intricate recipes to creating your own culinary masterpieces, our society offers a platform for culinary enthusiasts to connect, learn, and celebrate the joy of cooking.",
    owner_id: 3,
  },
  {
    group_name: "Guitar Jamming Crew",
    description:
      "Calling all guitar enthusiasts! Join the Guitar Jamming Crew and become part of a vibrant community of musicians who share a passion for playing the guitar. Whether you're a beginner or a seasoned guitarist, this group is a place where you can strum your favorite tunes, learn from others, and collaborate on musical projects. Jam sessions, workshops, and performances await you as you immerse yourself in the world of guitar music and create harmonious melodies with fellow guitarists.",
    owner_id: 4,
  },
  {
    group_name: "Writers Unite",
    description:
      "Unleash your creative potential and join Writers Unite, a community of writers who share a love for storytelling, creative expression, and literary exploration. In this group, you'll have the opportunity to showcase your writing, receive valuable feedback, engage in stimulating discussions, and collaborate with fellow writers on exciting projects. Whether you're a seasoned author or just starting your writing journey, Writers Unite provides a supportive environment for growth, inspiration, and the celebration of the written word.",
    owner_id: 5,
  },
  {
    group_name: "Artistic Painters",
    description:
      "Step into the world of artistic expression and join Artistic Painters, a community of passionate painters who embrace creativity and self-expression through art. Discover different painting techniques, explore various mediums, and engage in meaningful discussions with fellow artists. Whether you're a beginner or an experienced painter, this group offers a supportive environment for sharing your artwork, receiving feedback, and learning from others. Together, let's celebrate the beauty of art and unleash our imaginations on the canvas.",
    owner_id: 1,
  },
  {
    group_name: "Fitness Fanatics",
    description:
      "Welcome to Fitness Fanatics, a group dedicated to helping you achieve your fitness goals and lead a healthy lifestyle. Join us in our exhilarating workouts, where you'll be motivated, challenged, and supported by like-minded individuals. From intense cardio sessions to strength training and yoga, our diverse range of activities caters to all fitness levels. Together, we'll break barriers, celebrate accomplishments, and foster a community that embraces the transformative power of fitness.",
    owner_id: 2,
  },
  {
    group_name: "Bookworms Book Club",
    description:
      "Calling all book lovers! Join the Bookworms Book Club and dive into the captivating world of literature. From bestsellers to hidden gems, we explore a wide range of genres and authors. Engage in lively discussions, share your thoughts, and expand your reading horizons. Connect with fellow bookworms who share your passion for stories, words, and the magic of reading. Together, let's embark on literary journeys that ignite our imaginations and deepen our appreciation for the written word.",
    owner_id: 3,
  },
  {
    group_name: "Yoga for Mind and Body",
    description:
      "Join us for Yoga for Mind and Body, where we embrace the holistic practice of yoga to nurture your physical, mental, and spiritual well-being. Through gentle movements, mindful breathing, and meditation, we create a space for self-care and self-discovery. Our experienced instructors guide you on a journey of inner peace, flexibility, and personal growth. Connect with a supportive community, cultivate mindfulness, and find balance amidst the demands of daily life. Together, let's harness the transformative power of yoga for a harmonious mind and body.",
    owner_id: 4,
  },
  {
    group_name: "Crafting Corner",
    description:
      "Welcome to Crafting Corner, a creative hub where artisans come together to explore the world of crafting. From sewing to paper crafting, woodworking to jewelry making, our group covers a wide range of crafts. Share your projects, learn new techniques, and connect with fellow artisans who share your passion for creating beautiful and unique crafts. Whether you're a beginner or an experienced crafter, Crafting Corner offers inspiration, support, and endless possibilities for unleashing your creativity.",
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
