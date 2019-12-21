const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

exports.signup = async (req, res, next) => {
  const errors = validationResult(req);
  console.log("errors@@@", errors.isEmpty());
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed.");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }

  const { email, password, confirmPassword } = req.body;

  try {
    const hashedPass = await bcrypt.hash(password, 12);
    const user = new User({ email, password: hashedPass });
    const createUser = await user.save();

    res.status(201).json({
      message: "Created new account",
      userId: createUser._id
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.login = async (req, res) => {
  const errors = validationResult(req);
  console.log("errors@@@", errors.isEmpty());
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed.");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }

  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (!user) {
    const error = new Error("There is no such email in a database.");
    throw error;
  }

  const isEqual = await bcrypt.compare(password, user.password);
  if (!isEqual) {
    const error = new Error("Wrong password.");
    error.code = 401;
    throw error;
  }
  const token = jwt.sign(
    {
      email: user.email,
      userId: user.__id.toString()
    },
    "superultrasecretpasswordomglolyolo",
    { expiresIn: "1h" }
  );
  return {
    email: user.email,
    token: token,
    userId: user._id.toString()
  };
};
