const express = require("express");
const router = express.Router();
const { validate } = require("../../Helpers/validations");
const { isAuthorized, isAuthorizedAsAdmin } = require("../../Helpers/middlewares");
const userCntrl = require("../../Controllers/userController");

router.get("/currentuser", isAuthorized, userCntrl.currentuser);

router.put("/currentuser", validate.userInfo, isAuthorized, userCntrl.update);

router.delete("/:userId", isAuthorized, userCntrl.delete);

module.exports = router;