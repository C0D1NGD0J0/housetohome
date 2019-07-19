const express = require("express");
const router = express.Router();
const { validate } = require("../../Helpers/validations");
const { isAuthorizedAsStaff } = require("../../Helpers/middlewares");
const propertyCntrl = require("../../Controllers/propertyController");
const { uploadImg } = require("../../Config/cloudinary");

router.get("/", propertyCntrl.index);

router.get("/homepage", propertyCntrl.homepage);

router.get("/nearby", propertyCntrl.nearByProperties);

router.get("/:propertyId", propertyCntrl.show);

router.post("/", uploadImg, validate.property, isAuthorizedAsStaff, propertyCntrl.create);

router.put("/:propertyId", validate.property, isAuthorizedAsStaff, propertyCntrl.update);

module.exports = router;