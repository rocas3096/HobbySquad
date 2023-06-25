const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Group, User, Tag } = require("../../models");

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

router.get("/search", async (req, res, next) => {
  const { q } = req.query;
  console.log(q);
  let results;
  try {
    if (!q || q.length === 0) {
      results = [];
    } else {
      results = await sequelize.query(
        "SELECT DISTINCT g.id, g.group_name, g.description, COALESCE(u.user_count, 0) AS user_count FROM `groups` g LEFT JOIN ( SELECT GroupId, COUNT(*) AS user_count FROM usergroups GROUP BY GroupId ) u ON g.id = u.GroupId LEFT JOIN tags t ON g.id = t.group_id WHERE TRIM(g.group_name) LIKE :searchTerm OR TRIM(t.name) LIKE :searchTerm;",
        {
          replacements: { searchTerm: `%${q}%` },
        }
      );
      results = results[0];
    }

    const searchData = {
      isSearching: true,
      quantity: results.length,
      searchEmpty: results.length === 0,
      term: q,
      results,
    };
    res.status(200).json(searchData);
  } catch (error) {
    console.log(error);
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
  let { title, tags, description, userId } = req.body;
  tags = tags.split(",");
  let newGroup = await Group.create({
    group_name: title,
    description,
    owner_id: userId,
  });
  const foundUser = await User.findByPk(userId);

  for (let tag of tags) {
    await Tag.create({ name: tag, group_id: newGroup.id });
  }
  if (newGroup && foundUser) {
    await newGroup.addUser(foundUser);
    await foundUser.addGroup(newGroup);

    //Store the new group id in the session
    req.session.newGroupId = newGroup.id;
    
    res.redirect(`/invalidate-cache`);
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
