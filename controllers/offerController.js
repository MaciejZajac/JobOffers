const Offer = require("../models/Offer");
const User = require("../models/User");

exports.newOffer = async (req, res, next) => {
  if (!req.isAuth) {
    const error = new Error("Not authenticated.");
    error.code = 401;
    throw error;
  }

  const { positionTitle, city } = req.body;

  const user = await User.findById(req.userId);

  const offer = new Offer({ positionTitle, city, creator: user });

  const createdOffer = await offer.save();

  res.status(201).json({
    message: "Created new job offer.",
    offer: {
      offer: createdOffer
    }
  });
};
