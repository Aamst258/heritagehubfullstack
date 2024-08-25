const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  stateInCountry: {
    type: String,
    required: true,
  },
  virtuaL360image: {
    type: String,
    required: true,
  },
  mapimage: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  totalRatings: {
    type: Number,
    default: 0, // to track rating
  },
  ratingSum: {
    type: Number,
    default: 0,
  },
});

// Method to update rating
// placeSchema.methods.updateRating = function (newRating) {
//   this.ratingSum += newRating;
//   this.totalRatings += 1;
//   this.rating = this.ratingSum / this.totalRatings;
//   return this.save();
// };
const Place = mongoose.model("Place", placeSchema);
module.exports = Place;
