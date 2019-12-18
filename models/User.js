const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  offers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Offer"
    }
  ]
});

module.exports = mongoose.model("User", userSchema);