const express = require("express");
const router = express.Router();
const adminCntrl = require("../../Controllers/adminController");
const propertyCntrl = require("../../Controllers/propertyController");
const employeeCntrl = require("../../Controllers/employeeController");
const { isAuthorizedAsAdmin } = require("../../Helpers/middlewares");

router.get("/dashboard", isAuthorizedAsAdmin, adminCntrl.dashboard);

router.get("/employees", isAuthorizedAsAdmin, adminCntrl.employees);

router.get("/employees/:employeeId", isAuthorizedAsAdmin, adminCntrl.employee);

router.put("/employees/:employeeId/update_role", isAuthorizedAsAdmin, adminCntrl.updateEmployeeRole);

router.delete("/employees/:employeeId", isAuthorizedAsAdmin, employeeCntrl.delete);

router.delete("/properties/:propertyId", isAuthorizedAsAdmin, propertyCntrl.delete);

module.exports = router;