const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
	startDate: {type: Date, required: true},
	endDate: {type: Date, required: true},
	guestsCount: {type: Number, required: true},
	status: {type: String, default: 'pending'},
	guest: {type: Schema.Types.ObjectId, ref: 'User'},
	totalPrice: {type: Number, required: true},
	property: {type: Schema.Types.ObjectId, ref: 'Property'}
}, {timestamps: true});

const reservation = mongoose.model("Reservation", ReservationSchema);

module.exports = reservation;