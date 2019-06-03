"use strict";
const User = require('../Models/User');
const Property = require('../Models/Property');

const reservationCntrl = {
	all: async (req, res, next) =>{
		res.send("Working...");
	}
};

module.exports = reservationCntrl;