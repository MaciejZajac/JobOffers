const express = require("express");
const { check, body } = require("express-validator");
const User = require("../models/User");
const router = express.Router();
const authController = require("../controllers/authController");

router.post(
  "/signup",
  [
    check("email")
      .isEmail()
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then(userDoc => {
          if (userDoc) {
            return Promise.reject("This email already exits.");
          }
        });
      })
      .normalizeEmail(),
    body("password", "Please enter a password")
      .isLength({ min: 4 })
      .isAlphanumeric()
      .trim(),
    body("confirmPassword")
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("Password have to match!");
        }
        return true;
      })
      .trim()
  ],

  authController.signup
);

router.post(
  "/login",
  [
    check("email")
      .isEmail()
      .normalizeEmail(),
    body("password", "Please enter a password")
      .isLength({ min: 4 })
      .isAlphanumeric()
      .trim()
  ],
  authController.login
);

module.exports = router;
