const router = require("express").Router();
const User = require("../models/User");
const config = require('config');
const {
  registerValidation,
  loginValidation
} = require("../routes/validation.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const SecretKey = config.get('SecretKey');

//REGISTER
router.post("/register", async (req, res) => {
  //validate data
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //checking the unique user
  const nameExists = await User.findOne({ name: req.body.name });
  if (nameExists)
    return res.status(400).send("User with this username already exists!");

  //password hash
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //create new user
  const user = new User({
    name: req.body.name,
    password: hashedPassword
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser); // ({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  //validate data
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //checking if the name exists
  const user = await User.findOne({ name: req.body.name });
  if (!user) return res.status(400).send("Username doesn't exist!");
  //check if password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid password!");


  //create and assign a token
  const token = jwt.sign({_id: user._id}, SecretKey);
  res.header("auth-token", token).send(token);

  //res.send("Logged in!");
});

module.exports = router;