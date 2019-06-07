"use strict";
const User = require('../Models/User');
const Reservation = require('../Models/Reservation');
const Property = require('../Models/Property');
const { subtractDates } = require("../Helpers/utils");
const moment = require("moment");

const reservationCntrl = {
	allBookings: async (req, res, next) =>{
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

	showBooking: async (req, res, next) =>{
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

	createBooking: async (req, res, next) =>{
		const errors = {};
		const { propertyId } = req.params;

		try {
			const property = await Property.findOne({_id: propertyId}).exec();
			const { startDate, endDate, guestsCount } = req.body;
			
			if(!property) {
				errors.msg = "Invalid data provided.";
				return res.status(500).json(errors);
			};

			if(moment(startDate) <= moment() || moment(endDate) <= moment()) {
				errors.msg = "Checkin/Checkout date has to greater than todays date.";
				return res.status(400).json(errors);
			};

			const days = subtractDates(startDate, endDate) + 1;
			let reservation = new Reservation({ startDate, endDate, guestsCount });
			
			if(property.features.maxCapacity >= guestsCount){
				reservation.property = property.id; 
				reservation.guest = req.currentuser.id;
				reservation.totalPrice = property.price * days;
				
				reservation = await reservation.save();
				property.reservations.push({start: reservation.startDate, end: reservation.endDate});

				await property.save();
				return res.status(200).json(reservation);
			};
		} catch(e) {
			errors.msg = e.message;
			return res.status(400).json(errors);
		};
	},

	guestBookings: async (req, res, next) =>{
		res.send("working");
	},

	updateBooking: async (req, res, next) =>{
		res.send("working");
	},

	deleteBooking: async (req, res, next) =>{
		res.send("working");
	},

	updateBookingStatus: async (req, res, next) =>{
		const errors = {};
		const { propertyId, id } = req.param;
		const { status } = req.body;
		
		try {
			const property = await Property.findOne({_id: propertyId}).exec();
			let reservation = await Reservation.findById(id).exec();
			
			if(!property) {
				errors.msg = "Invalid Property details provided.";
				return res.status(404).json(errors);
			};
			
			reservation.status = status;

			return res.status(200).json(reservation);
		} catch(e) {
			errors.msg = e.message;
			return res.status(400).sjon(errors);
		};
	},

	verifyBookingDates: async (req, res, next) =>{
		const errors = {};
		const { propertyId } = req.params;
		
		try {
			const property = await Property.findOne({_id: propertyId}).exec();
			
			if(!property) {
				errors.msg = "Invalid data provided.";
				return res.status(500).json(errors);
			};
			
			const today = moment().format('YYYY-MM-DD');
			const reservations = await Reservation.find({ property: propertyId })
				.where('startDate').gte(today)
				.where('endDate').gte(today)
				.select('startDate endDate').exec();
			// return res.status(200).json(reservations);
		} catch (e){
			errors.msg = e.message;
			return res.status(404).json(errors);
		};
	}
};

module.exports = reservationCntrl;