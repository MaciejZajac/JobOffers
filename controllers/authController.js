const bcrypt = require("bcrypt");
const User = require("../models/User");
const { validationResult } = require("express-validator");

exports.signup = async (req, res, next) => {
  console.log("req", req);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed.");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }

  const { email, password, confirmPassword } = req;

  console.log("email", email);
  console.log("password", password);
  console.log("confirmPassowrd", confirmPassword);

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
