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
	listingType: {type: String, required: true},
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
	location: {
		type: {type: String, default: 'Point'},
		coordinates: [{type: Number, required: [true, "You must supply coordinates."]}],
		address: {
			type: String,
			required: [true, 'Property address must be provided.']
		}
	},
	photos: [{String}],
	author: {type: Schema.Types.ObjectId, ref: "Employee"},
	reservations: [{type: Schema.Types.ObjectId, ref: 'Reservation'}],
	meta: {}
}, {timestamps: true});

PropertySchema.virtual("full_address").get(function(){
	return `${this.address.unitNo} ${this.address.street} street, ${this.address.city.toUpperCase()}, ${this.address.state.toUpperCase()}, ${this.address.postCode.toUpperCase()}.`
});

const property = mongoose.model("Property", PropertySchema);

module.exports = property;