"use strict";
const User = require('../Models/User');
const Property = require('../Models/Property');

const reservationCntrl = {
	all: async (req, res, next) =>{
		const errors = {};
		try {
			const reservations = await Reservation.find({}).exec();
			return res.status(200).json(reservations);
		} catch(e) {
			errors.msg = e.message;
			return res.status(400).json(errors);
		};
	},

	currentuser: async (req, res, next) =>{
		const errors = {};
		const userId = req.currentuser.id;

		try {
			const user = await Reservation.find({guest: userId}).populate("property", "location price handler").exec();
			
			return res.status(200).json(user);
		} catch(e) {
			errors.msg = e.message;
			return res.status(404).json(errors);
		};
	},

	show: async (req, res, next) =>{
		const errors = {};
		const { id } = req.params;

		try {
			const reservation = Reservation.findOne({_id: id, guest: req.currentuser.id}).exec();
			return res.status(200).json(reservation);
		} catch(e) {
			errors.msg = e.message;
			return res.status(404).json(errors);
		};
	},

	create: async (req, res, next) =>{
		const errors = {};
		const { propertyId } = req.params;

		try {
			const property = await Property.findOne({_id: propertyId}).exec();
			const { startDate, endDate, guestsCount, totalPrice } = req.body;

			let reservation = new Reservation({ startDate, endDate, guestsCount,totalPrice, property: property.id, guest: req.currentuser.id });
			reservation = await reservation.save();
			property.reservations.push(reservation);
			await property.save();

			return res.status(200).json(reservation);
		} catch(e) {
			errors.msg = e.message;
			return res.status(400).json(errors);
		};
	}
};

module.exports = reservationCntrl;