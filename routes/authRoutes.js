const express = require("express");
const { check, body } = require("express-validator");

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
      .isLength({ min: 5 })
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

module.exports = router;
