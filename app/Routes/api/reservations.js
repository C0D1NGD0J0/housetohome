const express = require("express");
const router = express.Router();
const { validate } = require("../../Helpers/validations");
const reservCntrl = require("../../Controllers/reservationController");
const { isAuthorized, isAuthorizedAsAdmin } = require("../../Helpers/middlewares");

/* Routes:
	GET 		/api/admin/reservations
	GET 		/api/admin/reservations/:email_address
	GET 		/api/currentuser/reservations
	GET 		/api/currentuser/reservations/:id
	GET 		/api/reservations?status={PENDING/APPROVED}
	GET 		/api/reservations?start_date={PENDING/APPROVED}&end_date={}
	PUT 		/api/reservations/:id
	POST 		/api/reservations
	DELETE 	/api/reservations/:id
*/

router.get("/api/admin/reservations", isAuthorizedAsAdmin, reservCntrl.all);

// router.get("/api/admin/reservations/:email_address", isAuthorizedAsAdmin, reservCntrl.guest);

// router.get("/api/currentuser/reservations", isAuthorized, reservCntrl.currentuser);

// router.get("/api/currentuser/reservations/:id", isAuthorized, reservCntrl.show);

// router.post("/api/properties/:propertyId/reservations", isAuthorized, reservCntrl.create);

// router.put("/api/currentuser/reservations/:id", isAuthorized, reservCntrl.update);

// router.route("/api/admin/properties/:propertyId/reservations/:id", isAuthorizedAsAdmin)
// 	.put(reservCntrl.updateStatus)
// 	.delete(reservCntrl.delete);

module.exports = router;