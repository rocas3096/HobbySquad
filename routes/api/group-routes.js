const router = require("express").Router();
const { Group, User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const groupData = await Group.findAll({
      include: [User],
    });
    res.status(200).json(groupData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const groupData = await Group.findByPk(req.params.id, {
      include: [User],
    });

    if (!groupData) {
      res.status(400).json({ message: "No group found with that id!" });
      return;
    }

    res.status(200).json(groupData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newGroup = await Group.create(req.body);
    res.status(200).json(newGroup);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedGroup = await Group.update(req.body, {
      where: { id: req.params.id },
    });

    if (updatedGroup[0] === 0) {
      res.status(404).json({ message: "No group found with that id!" });
      return;
    }

    const groupData = await Group.findByPk(req.params.id, {
      include: [User],
    });

    res.status(200).json(groupData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const rowsAffected = await Group.destroy({
      where: { id: req.params.id },
    });

    if (rowsAffected === 0) {
      res.status(404).json({ message: "No group found with that id!" });
      return;
    }

    res.status(200).json("Group has been deleted.");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
