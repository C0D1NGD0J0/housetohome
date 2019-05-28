const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("slug");

const PropertySchema = new Schema({
	description: {
		type: String,
		trim: true,
		minlength: 20,
		required: [true, "Listing description is required."]
	},
	propertyType: {type: String, required: true},
	size: { type: Number, required: true },
	slug: {type: String},
	yearBuilt: {type: String, required: true},
	price: {type: Number, required: true, maxlength: 255},
	active: {type: Boolean, default: false},
	featured: {type: Boolean, default: false},
	handler: {type: Schema.Types.ObjectId, ref: 'Employee'},
	features: {
		bedroom:{type: Number, default: 1},
		bathroom: {type: Number, default: 1},
		maxCapacity: {type: Number, default: 1},
		floors: {type: Number, default: 1},
		parking: {type: Number, default: 0},
	},
	extras: {
		is_tv: {type: Boolean, default: false},
		is_kitchen: {type: Boolean, default: false},
		is_ac: {type: Boolean, default: false},
		is_heating: {type: Boolean, default: false},
		is_internet: {type: Boolean, default: false},
		pets: {type: Boolean, default: false}
	},
	address: {
		postCode: {type: String, required: true},
		unitNo: {type: String, required: true},
		state: {type: String, required: true},
		street: {type: String, required: true},
		city: {type: String, required: true},
		country: {type: String, required: true}
	},
	location: {
		type: {type: String, default: 'Point'},
		coordinates: [{type: Number}]
	},
	author: {type: Schema.Types.ObjectId, ref: "Employee"},
	status: {type: String, default: 'pending'},
	photos: [{String}],
}, {timestamps: true});

const property = mongoose.model("Property", PropertySchema);

module.exports = property;