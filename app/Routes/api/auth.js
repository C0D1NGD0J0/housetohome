const express = require("express");
const router = express.Router();
const { validate } = require("../../Helpers/validations");
const { isAuthorized } = require("../../Helpers/middlewares");
const authCntrl = require("../../Controllers/authController");

/* Routes:
	POST 	/api/auth/signup
	GET 	/api/auth/acct_activation/:token
	POST 	/api/auth/login
	POST 	/api/auth/forgot_password
	POST 	/api/auth/reset_password/:token
*/

router.post("/add_new_employee", isAuthorized, validate.signup, authCntrl.signup);

router.post("/login", validate.login, authCntrl.login);

router.post("/forgot_password", validate.emailAddress, authCntrl.forgotPwd);

router.post("/reset_password/:token", validate.pwdReset, authCntrl.resetPwd);

module.exports = router;