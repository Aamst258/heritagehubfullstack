const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const guideSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  placesKnown: {
    type: [String],
    required: true,
  },
  role: {
    type: String,
    default: "guide",
  },
  languagesKnown: {
    type: [String],
    required: true,
  },
});
guideSchema.pre("save", async function (next) {
  // console.log("pre mehtod", this);
  const user = this;
  if (!user.isModified("password")) {
    next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashed_Password = await bcrypt.hash(user.password, salt);
    user.password = hashed_Password;
  } catch (error) {
    next(error);
  }
});
// json web token
guideSchema.methods.generateToken = async function () {
  try {
  } catch (error) {}
};

const Guide = new mongoose.model("Guide", guideSchema);

module.exports = Guide;
