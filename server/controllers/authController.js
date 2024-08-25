const User = require("../models/userModel");
const Guide = require("../models/guideModel");
const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to HeritageHub");
  } catch (error) {
    console.log(error);
  }
};

const registerUser = async (req, res) => {
  try {
    // console.log(req.body);
    const { username, name, password, phone, email } = req.body;
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ msg: "email already Exist" });
    }
    // hash the password

    const userCreated = await User.create({
      username,
      name,
      password,
      phone,
      email,
    });
    res.status(200).json({
      msg: userCreated,
      token: userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(400).json({ msg: "something wrong" });
    console.log(error);
  }
};
//guide regsitration
const registerGuide = async (req, res) => {
  try {
    // console.log(req.body);
    const {
      username,
      name,
      phone,
      email,
      password,
      languagesKnown,
      placesKnown,
    } = req.body;
    const guideExist = await Guide.findOne({ email: email });
    if (guideExist) {
      return res.status(400).json({ msg: "email already exists" });
    }

    const guideCreated = await Guide.create({
      username,
      name,
      phone,
      email,
      password,
      placesKnown,
      languagesKnown,
    });
    res.status(200).json({
      msg: guideCreated,
      token: guideCreated.generateToken(),
      userId: guideCreated._id.toString(),
    });
  } catch (error) {
    res.status(400).json({ msg: "something wrong" });
    console.log(error);
  }
};
module.exports = { home, registerUser, registerGuide };
