 const router = require("express").Router();
const { User, Group, Hobby } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [Group, Hobby],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [Group, Hobby],
    });

    if (!userData) {
      res.status(400).json({ message: "No user found with that id!" });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { username, password, Hobbies } = req.body;

    const updatedUser = await User.findByPk(req.params.id);

    if (!updatedUser) {
      res.status(404).json({ message: "No user found with that id!" });
      return;
    }

    // Update the user's username and password
    updatedUser.username = username;
    updatedUser.password = password;
    await updatedUser.save();

    // Update the user's hobbies
    await updatedUser.setHobbies(Hobbies);

    // Fetch the updated user with associated hobbies
    const userWithHobbies = await User.findByPk(req.params.id, {
      include: [Group, Hobby],
    });

    res.status(200).json(userWithHobbies);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const rowsAffected = await User.destroy({
      where: { id: req.params.id },
    });

    if (rowsAffected === 0) {
      res.status(404).json({ message: "No user found with that id!" });
      return;
    }

    res.status(200).json("User has been deleted.");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
