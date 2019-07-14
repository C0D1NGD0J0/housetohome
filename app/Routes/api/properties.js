const express = require("express");
const router = express.Router();
const { validate } = require("../../Helpers/validations");
const { isAuthorizedAsStaff } = require("../../Helpers/middlewares");
const propertyCntrl = require("../../Controllers/propertyController");

router.get("/all", propertyCntrl.index);

router.get("/nearby", propertyCntrl.nearByProperties);

router.get("/:propertyId", propertyCntrl.show);

router.post("/", validate.property, isAuthorizedAsStaff, propertyCntrl.create);

router.put("/:propertyId", validate.property, isAuthorizedAsStaff, propertyCntrl.update);

module.exports = router;