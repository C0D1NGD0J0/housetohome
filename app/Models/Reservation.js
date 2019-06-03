const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
	startDate: {type: Date, required: true},
	endDate: {type: Date, required: true},
	guestsCount: {type: Number, required: true},
	status: {type: String, default: 'pending'},
	guest: {type: Schema.Types.ObjectId, ref: 'Guest'},
	totalPrice: {type: Number, required: true},
	property: {type: Schema.Types.ObjectId, ref: 'Property'}
}, {timestamps: true});

const property = mongoose.model("Property", ReservationSchema);

module.exports = property;