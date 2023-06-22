const router = require("express").Router();
const { UserHasGroup } = require("../../models");

// Get all UserHasGroup associations
router.get("/", async (req, res) => {
  try {
    const userHasGroupData = await UserHasGroup.findAll();
    res.status(200).json(userHasGroupData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new UserHasGroup association
router.post("/", async (req, res) => {
  try {
    const newUserHasGroup = await UserHasGroup.create(req.body);
    res.status(200).json(newUserHasGroup);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a UserHasGroup association
router.put("/:id", async (req, res) => {
  try {
    const updatedUserHasGroup = await UserHasGroup.update(req.body, {
      where: { id: req.params.id },
    });

    if (updatedUserHasGroup[0] === 0) {
      res
        .status(404)
        .json({ message: "No UserHasGroup association found with that id!" });
      return;
    }

    res.status(200).json(updatedUserHasGroup);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a UserHasGroup association
router.delete("/:id", async (req, res) => {
  try {
    const rowsAffected = await UserHasGroup.destroy({
      where: { id: req.params.id },
    });

    if (rowsAffected === 0) {
      res
        .status(404)
        .json({ message: "No UserHasGroup association found with that id!" });
      return;
    }

    res.status(200).json("UserHasGroup association has been deleted.");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
