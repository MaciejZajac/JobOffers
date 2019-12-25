const express = require("express");
const offerController = require("../controllers/offerController");
const router = express.Router();
const { body } = require("express-validator");

router.post(
  "/newOffer",
  [
    body("positionTitle", "Please enter a position Title")
      .notEmpty()
      .trim(),
    body("city", "Please enter a city")
      .notEmpty()
      .trim(),
    body("companyName", "Please enter a Company City")
      .notEmpty()
      .trim(),
    body("experience", "Please enter a required experience")
      .notEmpty()
      .trim(),
    body("companyDescription", "Please enter a Company description")
      .notEmpty()
      .trim(),
    body("projectDescription", "Please enter a Project description")
      .notEmpty()
      .trim(),
    body("companyPage", "Please enter a Company page")
      .notEmpty()
      .trim()
  ],
  offerController.newOffer
);
router.get("/getPrivateOffers", offerController.getPrivateOffers);
router.get("/getOffers", offerController.getOffers);
module.exports = router;
