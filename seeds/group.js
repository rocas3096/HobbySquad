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

  {
    group_name: "Pottery Masters",
    description:
      "Dive into the mesmerizing world of clay and ceramics with Pottery Masters. Whether you're shaping your first bowl or you're an experienced ceramicist, join us in molding a creative and welcoming community of pottery enthusiasts. Let's shape, glaze, and fire our way to beautiful creations.",
    owner_id: 1,
  },
  {
    group_name: "Chess Champions",
    description:
      "Welcome to Chess Champions, a group dedicated to the ancient and ever-engaging game of chess. Whether you're a novice player or an established master, join us in advancing our understanding of the game and testing our strategies against a community of supportive peers.",
    owner_id: 2,
  },
  {
    group_name: "Film Fanatics",
    description:
      "Are you passionate about the cinema? Film Fanatics brings together movie buffs from all walks of life to appreciate, critique, and discuss the fascinating world of film. Join us as we explore cinematic treasures from across the globe and through the ages.",
    owner_id: 3,
  },
  {
    group_name: "Urban Gardening Society",
    description:
      "Join the Urban Gardening Society and transform your city living space into a green oasis. From apartment balconies to community plots, we share our experiences and tips for cultivating flowers, vegetables, and herbs in urban settings.",
    owner_id: 4,
  },
  {
    group_name: "Startup Network",
    description:
      "Connect with fellow entrepreneurs and innovative thinkers at the Startup Network. Share business ideas, collaborate on projects, and navigate the challenges of starting and running your own business with a supportive community.",
    owner_id: 5,
  },
  {
    group_name: "Sci-Fi and Fantasy Universe",
    description:
      "Welcome to the Sci-Fi and Fantasy Universe, where we explore the limitless boundaries of imagination. Dive into deep discussions about your favorite series, movies, books, and games, and share your passion with fellow enthusiasts.",
    owner_id: 1,
  },
  {
    group_name: "Coffee Connoisseurs",
    description:
      "Calling all coffee lovers! Join Coffee Connoisseurs to taste and discuss different varieties and brewing methods, and to deepen your appreciation of this globally loved beverage.",
    owner_id: 2,
  },
  {
    group_name: "Meditation and Mindfulness",
    description:
      "Join the Meditation and Mindfulness group to find tranquility amidst the hustle and bustle. Discover different meditation techniques, share your experiences, and foster a more mindful and balanced lifestyle.",
    owner_id: 3,
  },
  {
    group_name: "Language Learning Club",
    description:
      "Explore the richness of languages worldwide with the Language Learning Club. Whether you're an experienced polyglot or just starting your first language, join us in the exciting journey of learning and cultural discovery.",
    owner_id: 4,
  },
  {
    group_name: "Investment Insights",
    description:
      "Join Investment Insights to discuss financial markets, share investment ideas, and learn about personal finance management. From stocks and bonds to cryptocurrency, let's navigate the complex world of finance together.",
    owner_id: 5,
  },
  {
    group_name: "Dog Lovers",
    description:
      "Are you a passionate dog owner or admirer? Join Dog Lovers to connect with fellow canine enthusiasts, share advice, and celebrate our love for man's best friend.",
    owner_id: 1,
  },
  {
    group_name: "Cosplay Creatives",
    description:
      "Cosplay Creatives is a supportive community for those who love to bring their favorite characters to life. Share your creations, learn new techniques, and celebrate the art of cosplay with us.",
    owner_id: 2,
  },
  {
    group_name: "Cycling Club",
    description:
      "Join Cycling Club to explore the world on two wheels. Whether you're into mountain biking, road racing, or leisurely rides, share your passion with a community of fellow cyclists.",
    owner_id: 3,
  },
  {
    group_name: "Global Cuisine Explorers",
    description:
      "Join Global Cuisine Explorers to discover food cultures from around the world. Share recipes, cooking techniques, and your own culinary creations with a community of food lovers.",
    owner_id: 4,
  },
  {
    group_name: "Coding Circle",
    description:
      "Join Coding Circle to connect with fellow developers, share your projects, and learn new programming languages and techniques. From beginners to experienced coders, all are welcome.",
    owner_id: 5,
  },
  {
    group_name: "Vintage Cars Club",
    description:
      "Join our community of vintage car enthusiasts! Share your love for classic cars, exchange maintenance tips, and take part in car shows and road trips.",
    owner_id: 1,
  },
  {
    group_name: "Home Brewing Society",
    description:
      "Join our Home Brewing Society and share your passion for craft beer with fellow home brewers. Exchange recipes, brewing techniques, and taste test each other's brews.",
    owner_id: 2,
  },
  {
    group_name: "Astronomy Club",
    description:
      "Explore the universe with fellow astronomy enthusiasts. Share interesting celestial observations, learn about different celestial bodies and phenomena, and go on stargazing trips together.",
    owner_id: 3,
  },
  {
    group_name: "Poetry Society",
    description:
      "Unleash your creativity with the Poetry Society. Share your poems, discuss your favorite poets and their works, and participate in poetry readings and slams.",
    owner_id: 4,
  },
  {
    group_name: "Robotics Club",
    description:
      "Join our Robotics Club to build, program, and compete with robots. Share your projects, learn new skills, and explore the cutting-edge technology in robotics.",
    owner_id: 5,
  },
  {
    group_name: "Bird Watching Club",
    description:
      "Join our Bird Watching Club and connect with fellow bird lovers. Share your sightings, learn about different species, and participate in bird watching trips.",
    owner_id: 1,
  },
  {
    group_name: "Green Thumbs Club",
    description:
      "Join our Green Thumbs Club for gardening enthusiasts. Share your gardening projects, exchange tips on plant care, and discuss the best ways to make your garden thrive.",
    owner_id: 2,
  },
  {
    group_name: "DIY Home Decor",
    description:
      "Join DIY Home Decor to share and learn about fun and unique DIY projects to spruce up your home. Share your projects, learn new techniques, and find inspiration.",
    owner_id: 3,
  },
  {
    group_name: "Stand-Up Comedy",
    description:
      "Join our Stand-Up Comedy group to share your jokes, get feedback, and learn about the craft of stand-up comedy. Attend comedy shows and workshops together.",
    owner_id: 4,
  },
  {
    group_name: "Fantasy Sports League",
    description:
      "Join our Fantasy Sports League to compete with fellow sports enthusiasts. Discuss strategy, player performance, and the thrill of the competition.",
    owner_id: 5,
  },
  {
    group_name: "History Buffs",
    description:
      "Join our History Buffs group to dive into the past. Discuss historical events, share interesting historical facts, and participate in museum trips and historical reenactments.",
    owner_id: 1,
  },
  {
    group_name: "Music Production",
    description:
      "Join our Music Production group to share your music, discuss production techniques, and collaborate on projects. From beginners to experienced producers, all are welcome.",
    owner_id: 2,
  },
  {
    group_name: "Sustainable Living",
    description:
      "Join our Sustainable Living group to learn about and share tips on living a sustainable, eco-friendly lifestyle. Discuss topics such as zero-waste living, eco-friendly products, and sustainable practices.",
    owner_id: 3,
  },
  {
    group_name: "Vegan Cooking",
    description:
      "Join our Vegan Cooking group to share and explore delicious vegan recipes. Discuss cooking techniques, vegan nutrition, and share your favorite vegan restaurants and products.",
    owner_id: 4,
  },
  {
    group_name: "Chess Club",
    description:
      "Join our Chess Club to play, discuss strategy, and compete in chess games. From beginners to experienced players, all are welcome.",
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
