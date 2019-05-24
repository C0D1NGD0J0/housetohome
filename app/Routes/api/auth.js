const express = require("express");
const router = express.Router();

/* Routes:
	POST 	/api/auth/signup
	GET 	/api/auth/acct_activation/:token
	POST 	/api/auth/login
	POST 	/api/auth/forgot_password
	POST 	/api/auth/reset_password/:token
*/
module.exports = router;