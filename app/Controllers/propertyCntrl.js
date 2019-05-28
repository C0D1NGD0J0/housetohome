"use strict";
const Property = require('../Models/Property');

const propertyCntrl = {
	create: async (req, res, next) =>{
		const errors = {};
		const {description, propertyType, listingType, size, featured, yearBuilt, price, handler, author, status, address, features, extras, active, } = req.body;

		const property = new Property({ description, propertyType, listingType, size, yearBuilt, price, author: req.currentuser.id, address, features, extras });

		if(req.currentuser.isAdmin){
			property.active = active;
			property.featured = featured;
			property.handler = req.currentuser.id;
		};

		console.log(property);
	}
};

module.exports = propertyCntrl;