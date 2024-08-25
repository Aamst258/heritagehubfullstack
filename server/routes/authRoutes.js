const express = require("express");
const router = express.Router();
// Router class to create modular mountable route handlers
const {
  home,
  registerUser,
  registerGuide,
} = require("../controllers/authController");
router.route("/").get(home);
router.route("/registerUser").post(registerUser);
router.route("/registerGuide").post(registerGuide);

module.exports = router;
