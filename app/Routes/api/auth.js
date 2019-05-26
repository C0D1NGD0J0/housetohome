const express = require("express");
const router = express.Router();
const { validate } = require("../../Helpers/validations");
const authCntrl = require("../../Controllers/authController");

/* Routes:
	POST 	/api/auth/signup
	GET 	/api/auth/acct_activation/:token
	POST 	/api/auth/login
	POST 	/api/auth/forgot_password
	POST 	/api/auth/reset_password/:token
*/

router.post("/add_new_employee", validate.signup, authCntrl.signup);

router.post("/login", validate.login, authCntrl.login);

module.exports = router;