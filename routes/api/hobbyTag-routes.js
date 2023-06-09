const router = require("express").Router();
const { HobbyHasTag } = require("../../models");

// Get all HobbyHasTag associations
router.get("/", async (req, res) => {
  try {
    const hobbyHasTagData = await HobbyHasTag.findAll();
    res.status(200).json(hobbyHasTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new HobbyHasTag association
router.post("/", async (req, res) => {
  try {
    const newHobbyHasTag = await HobbyHasTag.create(req.body);
    res.status(200).json(newHobbyHasTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a HobbyHasTag association
router.put("/:id", async (req, res) => {
  try {
    const updatedHobbyHasTag = await HobbyHasTag.update(req.body, {
      where: { id: req.params.id },
    });

    if (updatedHobbyHasTag[0] === 0) {
      res.status(404).json({ message: "No HobbyHasTag association found with that id!" });
      return;
    }

    res.status(200).json(updatedHobbyHasTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a HobbyHasTag association
router.delete("/:id", async (req, res) => {
  try {
    const rowsAffected = await HobbyHasTag.destroy({
      where: { id: req.params.id },
    });

    if (rowsAffected === 0) {
      res.status(404).json({ message: "No HobbyHasTag association found with that id!" });
      return;
    }

    res.status(200).json("HobbyHasTag association has been deleted.");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
