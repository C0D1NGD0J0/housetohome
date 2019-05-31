const express = require("express");
const router = express.Router();
const adminCntrl = require("../../Controllers/adminController");
const propertyCntrl = require("../../Controllers/propertyCntrl");
const { isAuthorizedAsAdmin } = require("../../Helpers/middlewares");

router.get("/employees", isAuthorizedAsAdmin, adminCntrl.employees);

router.get("/employees/:employeeId", isAuthorizedAsAdmin, adminCntrl.employee);

// router.put("/employees/:id/update_role", isAuthorizedAsAdmin, adminCntrl.updateEmployeeRole);

// router.delete("/properties/:propertyId", isAuthorizedAsAdmin, propertyCntrl.destroy);

// router.delete("/employees/:id", isAuthorizedAsAdmin, adminCntrl.deleteEmployee);

module.exports = router;