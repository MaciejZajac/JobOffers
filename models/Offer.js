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
  creator: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

module.exports = mongoose.model("Offer", offerSchema);
