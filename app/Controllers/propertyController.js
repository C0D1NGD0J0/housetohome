"use strict";
const Property = require('../Models/Property');
const { ObjectId } = require('mongoose').Types;

const propertyCntrl = {
	homepage: async (req, res, next) =>{
		const errors = {};
		try {
			const properties = await Property.find({featured: true, isActive: true}).select("-author -extras -meta -handler").limit(4).sort({createdAt: -1});
			return res.status(200).json(properties);
		} catch(e) {
			errors.msg = e.message;
			return res.status(400).json(errors);
		}
	},

	index: async (req, res, next) =>{
		let query;
		const errors = {};
		let { country, page, limit } = req.query;
		page = Number(page) || 1;
		limit = Number(limit) || 20;
		const offset = ((limit * page) - limit);
	
		if(country){
			query = {
				isActive: true,
				"location.address": { "$regex": country, "$options": "i" }
			};
		} else {
			query = {isActive: true};
		};

		try {
			const properties = await Property.find(query).skip(offset).limit(limit).sort({ createdAt: -1});
			return res.status(200).json(properties);
		} catch(err) {
			errors.msg = err.message;
			return res.status(404).json(errors);
		};
	},

	create: async (req, res, next) =>{
		const errors = {};
		const { description, propertyType, listingType, size, featured, yearBuilt, price, handler, author, bedroom, bathroom, maxCapacity, floors, parking, is_tv, is_kitchen, is_ac, is_heating, is_internet, pets, isActive, address, latitude, longitude, is_gym, swimming_pool, is_laundry } = req.body;
		
		try {			
			let property = new Property({ description, propertyType, listingType, size, yearBuilt, price, author: req.currentuser.id, location: {coordinates: [0,0]}, features: {}, extras: {} });
			
			property.location.address = address;
			property.location.coordinates[0] = longitude;
			property.location.coordinates[1] = latitude;
			property.features = { bedroom, bathroom, maxCapacity, floors, parking };
			property.extras = { is_tv, is_kitchen, is_ac, is_heating, is_internet, pets};
			
			if(!req.currentuser.isadmin && req.currentuser.role === 'employee'){
				property.handler = req.currentuser.id;
			};

			if(req.currentuser.isadmin){
				property.isActive = isActive;
				property.featured = featured;
				property.handler = handler;
			};
			
			property = await property.save();
			return res.status(200).json(property);
		} catch(err) {
			errors.msg = err.message;
			return res.status(404).json(errors);
		};
	},

	show: async (req, res, next) =>{
		const errors = {};
		const { propertyId } = req.params;

		try {
			let property = await Property.findById(propertyId).populate("handler", "id fullname firstName lastName email phone").exec();

			if(!property) {
				errors.msg = "Property not found!";
				return res.status(400).json(errors);
			};
			
			const q = {
				location: {
					$near: {
						$geometry: {
							type: 'Point',
							coordinates: [property.location.coordinates[0], property.location.coordinates[1]]
						},
						$maxDistance: 10000 //10K meters == 10km
					}
				},
				isActive: true
			};
			let properties = await Property.find(q).select("location.address features.bedroom features.bathroom price").limit(5);			

			return res.status(200).json({property, nearByProperties: properties});
		} catch(e) {
			errors.msg = e.message;
			return res.status(404).json(errors);
		};
	},

	update: async (req, res, next) =>{
		const errors = {};
		const propertyId = ObjectId(req.params.propertyId);
		const { description, propertyType, listingType, size, featured, yearBuilt, price, handler, author, bedroom, bathroom, maxCapacity, floors, parking, is_tv, is_kitchen, is_ac, is_heating, is_internet, pets, isActive, address, latitude, longitude, is_gym, swimming_pool, is_laundry } = req.body;

		try {
			let property = await Property.findById(propertyId).exec();			
			const updateData = { description, propertyType, listingType, size, yearBuilt, price, 
				location:{ coordinates: []}, features: {}, extras: {}, meta: {} };

			updateData.location.type = "Point";
			updateData.location.address = address;
			updateData.location.coordinates[0] = Number(longitude);
			updateData.location.coordinates[1] = Number(latitude);
			
			updateData.features = { bedroom, bathroom, maxCapacity, floors, parking };
			updateData.extras = { is_tv, is_kitchen, is_ac, is_heating, is_internet, pets, is_gym, swimming_pool, is_laundry};
			updateData.meta.lastUpdatedBy = req.currentuser.id;

			if(req.currentuser.isadmin){
				updateData.handler = handler;
				updateData.isActive = isActive;
			};			
			
			// console.log(updateData)
			if(property.author._id.equals(req.currentuser.id) || req.currentuser.isadmin){
				property = await Property.findOneAndUpdate({ _id: propertyId }, { $set: updateData }, { new: true }).populate("handler", "id fullname").exec();
				
				return res.status(200).json(property);
			} else{
				errors.msg = "You are not permitted to perform this action.";
				return res.status(401).json(errors);
			};
		} catch(e) {
			errors.msg = e.message;
			return res.status(400).json(errors);
		};
	},

	delete: async (req, res, next) =>{
		const errors = {};
		const { propertyId } = req.params;

		try {
			if(req.currentuser.isadmin){
				const property = await Property.findOneAndRemove({_id: propertyId}).exec();
				if(!property) return res.status(404).json({msg: "Property not found."});
				
				return res.status(200).json(property);
			};

			return res.status(401).json("Action not authorized!!");
		} catch(e) {
			errors.msg = e.message;
			return res.status(404).json(errors);
		};
	},

	nearByProperties: async (req, res, next) =>{
		const geoPoints = [req.query.lng, req.query.lat].map(parseFloat);
		const q = {
			location: {
				$near: {
					$geometry: {
						type: 'Point',
						coordinates: geoPoints
					},
					$maxDistance: 10000 //10K meters == 10km
				}
			},
			isActive: true
		};

		const properties = await Property.find(q).select("location.address features.bedroom features.bathroom price").limit(5);
		return res.status(200).json(properties)
	}
};

module.exports = propertyCntrl;