const express = require("express");
const router = express.Router();
const { validate } = require("../../Helpers/validations");
const { isAuthorized, isAuthorizedAsAdmin } = require("../../Helpers/middlewares");
const authCntrl = require("../../Controllers/authController");

router.post("/signup", validate.signup, authCntrl.signupGuest);

router.post("/add_new_employee", isAuthorizedAsAdmin, validate.signup, authCntrl.signupEmployee);

router.post("/login", validate.login, authCntrl.login);

router.post("/forgot_password", validate.emailAddress, authCntrl.forgotPwd);

router.post("/reset_password/:token", validate.pwdReset, authCntrl.resetPwd);

module.exports = router;