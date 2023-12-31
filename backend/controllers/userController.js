const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, username, email, image, password } = req.body;

  //   regex
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (!name || !username || !email || !password) {
    res.status(400);
    throw new Error("Add fields must be added");
  }

  //   validation checks
  if (password.length < 8) {
    return res.status(400).send("Password must be at least 8 characters");
  }

  if (password.length > 64) {
    return res.status(400).send("Password must be 64 characters or less");
  }

  if (!specialChars.test(password)) {
    return res.status(400).send("Password must contain a special character");
  }

  //   // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).send("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // get user avatar
  const avatar = `https://api.multiavatar.com/${name}.png`;

  // Create user
  const user = await User.create({
    name,
    email,
    avatar,
    username,
    image,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      username: user.username,
      image: user.image,
      token: generateToken(user._id),
    });
  } else {
    return res.status(400).send("Invalid user data");
  }
});

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check for user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = generateToken(user._id);

    res.json({
      _id: user.id,
      email: user.email,
      token,
    });
  } else {
    res.status(400).send("Invalid credentials");
  }
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

module.exports = {
  registerUser,
  loginUser,
};
