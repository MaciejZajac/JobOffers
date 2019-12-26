const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companyProfile = new Schema({
  companyName: {
    type: String,
    required: true
  },
  companyHistory: {
    type: String,
    required: true
  },
  linkedInURL: {
    type: String,
    required: true
  },
  companyWebsite: {
    type: String,
    required: true
  },
  creator: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

module.exports = mongoose.model("CompanyProfile", companyProfile);
