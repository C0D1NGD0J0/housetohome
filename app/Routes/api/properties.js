const express = require("express");
const router = express.Router();
const { validate } = require("../../Helpers/validations");
const { isAuthorized, isAuthorizedAsAdmin } = require("../../Helpers/middlewares");
const propertyCntrl = require("../../Controllers/propertyController");

router.get("/all", propertyCntrl.index);

router.get("/:propertyId", propertyCntrl.show);

router.post("/", isAuthorized, validate.property, propertyCntrl.create);

router.put("/:propertyId", validate.property, isAuthorized, propertyCntrl.update);

module.exports = router;