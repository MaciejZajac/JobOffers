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
  user.offers.push(createdOffer);
  await user.save();
  res.status(201).json({
    message: "Created new job offer.",
    offer: {
      offer: createdOffer
    }
  });
};

// PUBLIC

exports.getOffers = async (req, res, next) => {
  const countDocuments = await Offer.find().countDocuments();
  const offers = await Offer.find();

  res.status(200).json({
    totalCount: countDocuments,
    offers: offers.map(offer => {
      return {
        ...offer._doc,
        _id: offer._id.toString()
      };
    })
  });
};

// PRIVATE
exports.getPrivateOffers = async (req, res, next) => {
  if (!req.isAuth) {
    const error = new Error("Not authenticated.");
    error.code = 401;
    throw error;
  }
  const countDocuments = await Offer.find().countDocuments();
  const offers = await Offer.find({ creator: req.userId });

  res.status(200).json({
    totalCount: countDocuments,
    offers: offers.map(offer => {
      return {
        ...offer._doc,
        _id: offer._id.toString()
      };
    })
  });
};
