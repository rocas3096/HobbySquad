const router = require("express").Router();
const { Post, Group, User } = require("../../models");
const ExpressError = require("../../util/ExpressError");

// Get all posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll();
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a single post by id
router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new post
router.post("/:group_id/:user_id", async (req, res, next) => {
  try {
    const { group_id, user_id } = req.params;
    const group = await Group.findByPk(group_id);
    const user = await User.findByPk(user_id);
    if (!group) {
      return next(new ExpressError("Group does not exists", "group", 404));
    }
    if (!user) {
      return next(new ExpressError("User does not exists", "user", 404));
    }
    const { content } = req.body;
    let newPost = await Post.create({ content, user_id, group_id });
    let data = { ...newPost.dataValues, user };
    console.log({ data });
    res.status(201).json({ msg: "success", data });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// Update a post
router.put("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    if (postData.user_id !== req.session.userId) {
      res.status(401).json({ message: "You can only update your own posts." });
      return;
    }

    const updatedPost = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a post
router.delete("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    if (postData.user_id !== req.session.userId) {
      res.status(401).json({ message: "You can only delete your own posts." });
      return;
    }

    const deletedPost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
