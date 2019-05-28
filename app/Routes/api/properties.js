const express = require("express");
const router = express.Router();
const { validate } = require("../../Helpers/validations");
const { isAuthorized, isAuthorizedAsAdmin } = require("../../Helpers/middlewares");
const propertyCntrl = require("../../Controllers/propertyCntrl");

// router.get("/", propertyCntrl.index);

// router.get("/:id", propertyCntrl.show);

router.post("/", isAuthorized, validate.property, propertyCntrl.create);

// router.put("/:id", validate.property, isAuthorized, propertyCntrl.update);

// router.delete("/:id", isAuthorizedAsAdmin, propertyCntrl.delete);

module.exports = router;