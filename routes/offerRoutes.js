const express = require("express");
const offerController = require("../controllers/offerController");
const router = express.Router();

router.post("/newOffer", offerController.newOffer);
router.get("/getPrivateOffers", offerController.getPrivateOffers);
router.get("/getOffers", offerController.getOffers);
module.exports = router;
