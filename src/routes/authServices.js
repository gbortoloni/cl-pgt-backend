const express = require("express");
const router = express.Router();

const AuthService = require("../auth/authServices");

router.post("/login", AuthService.login);
router.post("/signup", AuthService.signup);
router.post("/validateToken", AuthService.validateToken);

module.exports = router;
