const router = require("express").Router();
const { UserHasHobby } = require("../../models");

// Get all UserHasHobby associations
router.get("/", async (req, res) => {
  try {
    const userHasHobbyData = await UserHasHobby.findAll();
    res.status(200).json(userHasHobbyData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new UserHasHobby association
router.post("/", async (req, res) => {
  try {
    const newUserHasHobby = await UserHasHobby.create(req.body);
    res.status(200).json(newUserHasHobby);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a UserHasHobby association
router.put("/:id", async (req, res) => {
  try {
    const updatedUserHasHobby = await UserHasHobby.update(req.body, {
      where: { id: req.params.id },
    });

    if (updatedUserHasHobby[0] === 0) {
      res.status(404).json({ message: "No UserHasHobby association found with that id!" });
      return;
    }

    res.status(200).json(updatedUserHasHobby);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a UserHasHobby association
router.delete("/:id", async (req, res) => {
  try {
    const rowsAffected = await UserHasHobby.destroy({
      where: { id: req.params.id },
    });

    if (rowsAffected === 0) {
      res.status(404).json({ message: "No UserHasHobby association found with that id!" });
      return;
    }

    res.status(200).json("UserHasHobby association has been deleted.");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
