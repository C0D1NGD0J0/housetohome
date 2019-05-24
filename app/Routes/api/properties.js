const express = require("express");
const router = express.Router();

/* Routes:
	GET 		/api/properties
	GET 		/api/properties/:id
	GET 		/api/properties/:listing_type
	GET 		/api/properties?city={CITY_NAME}&price={}...
	PUT 		/api/properties/:id {UPDATE}
	POST  	/api/properties/
	DELETE 	/api/properties/:id
*/
module.exports = router;