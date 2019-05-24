const express = require("express");
const router = express.Router();

/* Routes:
	GET 		/api/bookings
	GET 		/api/bookings/:email_address
	GET 		/api/bookings/confirmed
	GET 		/api/bookings?status={PENDING/APPROVED}
	PUT 		/api/bookings/:id
	POST 		/api/bookings
	DELETE 	/api/bookings/:id
*/
module.exports = router;