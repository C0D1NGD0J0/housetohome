const express = require("express");
const router = express.Router();
const { validate } = require("../Helpers/validations");
const authCntrl = require("../Controllers/authController");

router.get("/account_activation/:token", authCntrl.activateAcct);

module.exports = router;