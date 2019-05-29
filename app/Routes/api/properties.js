const express = require("express");
const router = express.Router();
const { validate } = require("../../Helpers/validations");
const { isAuthorized, isAuthorizedAsAdmin } = require("../../Helpers/middlewares");
const propertyCntrl = require("../../Controllers/propertyCntrl");

router.get("/all", propertyCntrl.index);

router.get("/:propertyId", propertyCntrl.show);

router.post("/", isAuthorized, validate.property, propertyCntrl.create);

router.put("/:propertyId", validate.property, isAuthorized, propertyCntrl.update);

// router.delete("/:propertyId", isAuthorizedAsAdmin, propertyCntrl.delete);

module.exports = router;