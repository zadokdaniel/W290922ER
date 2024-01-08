const router = require("express").Router();
const { User, validateUser } = require("../models/users.model");

const bcrypt = require("bcrypt");
const _ = require("lodash");

router.post("/", async (req, res) => {
  // validate user's input
  const { error } = validateUser(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  // validate system
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    res.status(400).send("User already registered");
    return;
  }

  // process
  const newUser = new User({
    ...req.body,
    password: await bcrypt.hash(req.body.password, 12),
  });

  await newUser.save();

  // response
  res.json(_.pick(newUser, ["_id", "name", "email"]));
});

module.exports = router;
