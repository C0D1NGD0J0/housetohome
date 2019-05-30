const express = require("express");
const router = express.Router();
const { validate } = require("../../Helpers/validations");
const { isAuthorized, isAuthorizedAsAdmin } = require("../../Helpers/middlewares");
const employeeCntrl = require("../../Controllers/employeeController");

router.get("/currentuser", isAuthorized, employeeCntrl.currentuser);

router.put("/currentuser", validate.employeeInfo, isAuthorized, employeeCntrl.update);

module.exports = router;


/* Routes:
	GET 		/api/admin/employees
	GET 		/api/admin/employees/:id

	GET 		/api/employees/:id
	GET 		/api/employees/:id/properties
	PUT 		/api/employees/:id
	DELETE 	/api/employees/:id
*/