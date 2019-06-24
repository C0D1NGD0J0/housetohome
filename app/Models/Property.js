const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
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
	listingType: {type: String, required: true},
	size: { type: Number, required: true },
	slug: {type: String},
	yearBuilt: {type: String, required: true},
	price: {type: Number, required: true, maxlength: 255},
	isActive: {type: Boolean, default: false},
	featured: {type: Boolean, default: false},
	handler: {type: Schema.Types.ObjectId, ref: 'User'},
	features: {
		bedroom:{type: Number, default: 0},
		bathroom: {type: Number, default: 0},
		maxCapacity: {type: Number, default: 0},
		floors: {type: Number, default: 0},
		parking: {type: Number, default: 0},
	},
	extras: {
		is_tv: {type: Boolean, default: false},
		is_kitchen: {type: Boolean, default: false},
		is_ac: {type: Boolean, default: false},
		is_heating: {type: Boolean, default: false},
		is_internet: {type: Boolean, default: false},
		is_gym: {type: Boolean, default: false},
		swimming_pool: {type: Boolean, default: false},
		is_laundry: {type: Boolean, default: false},
		pets: {type: Boolean, default: false}
	},
	location: {
		type: {type: String, default: 'Point'},
		coordinates: [{
			type: Number, 
			unique: [true, 'Coordinates with this address already exists.'], 
			required: [true, "You must supply coordinates."]
		}],
		address: {
			type: String,
			required: [true, 'Property address must be provided.'],
			trim: true,
			lowercase: true
		}
	},
	photos: [{String}],
	author: {type: Schema.Types.ObjectId, ref: "User"},
	reservations: [{id: Schema.Types.ObjectId, start: String, end: String}],
	meta: {}
}, {timestamps: true});

PropertySchema.set('toObject', { virtuals: true });
PropertySchema.set('toJSON', { virtuals: true });

// PropertySchema.index({
// 	"location.address": "text"
// });

PropertySchema.plugin(uniqueValidator);

PropertySchema.virtual("formatAddress").get(function(){
	const address = this.location.address.split(",");
	return{
		street: address[0].trim(),
		city: address[1] ? address[1].trim() : "",
		postCode: address[2] ? address[2].trim() : "",
		country: address[3] ? address[3].trim() : ""
	};
});

const property = mongoose.model("Property", PropertySchema);

module.exports = property;