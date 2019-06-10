const express = require("express");
const router = express.Router();
const adminCntrl = require("../../Controllers/adminController");
const propertyCntrl = require("../../Controllers/propertyController");
const userCntrl = require("../../Controllers/userController");
const { isAuthorizedAsAdmin } = require("../../Helpers/middlewares");

router.get("/dashboard", isAuthorizedAsAdmin, adminCntrl.dashboard);

router.get("/users", isAuthorizedAsAdmin, adminCntrl.users);

router.get("/users/:userId", isAuthorizedAsAdmin, adminCntrl.user);

router.put("/users/:userId/update_role", isAuthorizedAsAdmin, adminCntrl.updateUserRole);

router.delete("/properties/:propertyId", isAuthorizedAsAdmin, propertyCntrl.delete);

module.exports = router;