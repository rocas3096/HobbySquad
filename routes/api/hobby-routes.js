const router = require("express").Router();
const { Hobby, User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const hobbyData = await Hobby.findAll({
      include: [User],
    });
    res.status(200).json(hobbyData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const hobbyData = await Hobby.findByPk(req.params.id, {
      include: [User],
    });

    if (!hobbyData) {
      res.status(400).json({ message: "No hobby found with that id!" });
      return;
    }

    res.status(200).json(hobbyData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newHobby = await Hobby.create(req.body);
    res.status(200).json(newHobby);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedHobby = await Hobby.update(req.body, {
      where: { id: req.params.id },
    });

    if (updatedHobby[0] === 0) {
      res.status(404).json({ message: "No hobby found with that id!" });
      return;
    }

    const hobbyData = await Hobby.findByPk(req.params.id, {
      include: [User],
    });

    res.status(200).json(hobbyData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const rowsAffected = await Hobby.destroy({
      where: { id: req.params.id },
    });

    if (rowsAffected === 0) {
      res.status(404).json({ message: "No hobby found with that id!" });
      return;
    }

    res.status(200).json("Hobby has been deleted.");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
