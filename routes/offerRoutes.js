const express = require("express");
const offerController = require("../controllers/offerController");
const router = express.Router();

router.post("/newOffer", offerController.newOffer);

module.exports = router;
