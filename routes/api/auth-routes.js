const router = require("express").Router();
const { User, Group, Hobby } = require("../../models");
const ExpressError = require("../../util/ExpressError");
const session = require("express-session");
const bcrypt = require("bcrypt");
router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const userExists = await User.findOne({ where: { username } });

    if (!userExists) {
      return next(
        new ExpressError("User does not exists", "user not found", 404)
      );
    }
    const passwordValidated = await bcrypt.compare(
      password,
      userExists.password
    );
    if (!passwordValidated) {
      return next(new ExpressError("Incorrect password", "unauthorized", 401));
    }
    console.log(userExists.password);
    return res.json("Success");
  } catch (error) {
    console.error(error);
  }
});
router.post("/register", async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const usernameExists = await User.findOne({ where: { username } });
    const emailExists = await User.findOne({ where: { email } });

    if (usernameExists) {
      return next(
        new ExpressError(
          "Username already exits. Please login to continue or use a different username",
          "username exists",
          400
        )
      );
    }
    if (emailExists) {
      return next(
        new ExpressError(
          "Email already exits. Please login to continue or use a different email",
          "email exists",
          400
        )
      );
    }
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);
    let newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    console.log(newUser);
    if (newUser) {
      req.session.user = newUser.username;
    }
    res.status(201).json({ type: "success" });
  } catch (error) {
    console.error(error);
  }
});
module.exports = router;
