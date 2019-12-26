const Offer = require("../models/Offer");
const User = require("../models/User");
const CompanyProfile = require("../models/CompanyProfile");

exports.postNewOffer = async (req, res, next) => {
  if (!req.isAuth) {
    const error = new Error("Not authenticated.");
    error.code = 401;
    throw error;
  }

  const {
    positionTitle,
    city,
    companyName,
    experience,
    companyDescription,
    projectDescription,
    companyPage
  } = req.body;

  const user = await User.findById(req.userId);
  const creationDate = new Date().toISOString();
  const offer = new Offer({
    positionTitle,
    city,
    companyName,
    experience,
    companyDescription,
    projectDescription,
    companyPage,
    creationDate,
    creator: user
  });

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

exports.postCompanyProfile = async (req, res, next) => {
  if (!req.isAuth) {
    const error = new Error("Not authenticated.");
    error.code = 401;
    throw error;
  }

  const { companyName, companyHistory, linkedInURL, companyWebsite } = req.body;
  const user = await User.findById(req.userId);
  if (!user) {
    const error = new Error("There is no such email in a database.");
    throw error;
  }

  const companyProfile = new CompanyProfile({
    companyName,
    companyHistory,
    linkedInURL,
    companyWebsite,
    creator: user
  });
  const createdProfile = await companyProfile.save();
  user.companyProfile = createdProfile;
  await user.save();

  res.status(201).json({
    message: "Created Company's Profile",
    companyProfile: {
      createdProfile
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
