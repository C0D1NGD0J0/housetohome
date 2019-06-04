const express = require("express");
const router = express.Router();
const { validate } = require("../../Helpers/validations");
const reservCntrl = require("../../Controllers/reservationController");
const { isAuthorized, isAuthorizedAsAdmin } = require("../../Helpers/middlewares");

router.get("/api/admin/reservations", isAuthorizedAsAdmin, reservCntrl.allBookings);

router.get("/api/currentuser/reservations", isAuthorized, reservCntrl.currentuser);

router.get("/api/currentuser/reservations/:id", isAuthorized, reservCntrl.showBooking);

router.post("/api/properties/:propertyId/reservations", isAuthorized, reservCntrl.createBooking);

router.get("/api/admin/reservations/:email_address", isAuthorizedAsAdmin, reservCntrl.guestBookings);

router.get("/api/properties/:propertyId/reservations/confirm_dates", reservCntrl.verifyBookingDates);

router.put("/api/currentuser/reservations/:id", isAuthorized, reservCntrl.updateBooking);

router.route("/api/admin/properties/:propertyId/reservations/:id", isAuthorizedAsAdmin)
	.put(reservCntrl.updateBookingStatus)
	.delete(reservCntrl.deleteBooking);

module.exports = router;