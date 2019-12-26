const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const offerSchema = new Schema({
  positionTitle: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  companyDescription: {
    type: String,
    required: true
  },
  projectDescription: {
    type: String,
    required: true
  },
  companyPage: {
    type: String,
    required: true
  },
  creationDate: {
    type: Date,
    default: Date.now
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Offer", offerSchema);
