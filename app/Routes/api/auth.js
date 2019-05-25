const express = require("express");
const router = express.Router();
const authCntrl = require("../../Controllers/authController");

/* Routes:
	POST 	/api/auth/signup
	GET 	/api/auth/acct_activation/:token
	POST 	/api/auth/login
	POST 	/api/auth/forgot_password
	POST 	/api/auth/reset_password/:token
*/

router.post("/add_new_employee", authCntrl.signup);

module.exports = router;