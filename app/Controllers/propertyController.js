"use strict";
const Property = require('../Models/Property');
const { ObjectId } = require('mongoose').Types;

const propertyCntrl = {
	index: async (req, res, next) =>{
		const errors = {};
		try {
			const properties = await Property.find({ isActive: true }).sort({ createdAt: -1});
			return res.status(200).json(properties);
		} catch(err) {
			errors.msg = err.message;
			return res.status(404).json(errors);
		};
	},

	create: async (req, res, next) =>{
		const errors = {};
		const { description, propertyType, listingType, size, featured, yearBuilt, price, handler, author, bedroom, bathroom, maxCapacity, floors, parking, is_tv, is_kitchen, is_ac, is_heating, is_internet, pets, isActive, address, latitude, longitude } = req.body;
		
		try {			
			let property = new Property({ description, propertyType, listingType, size, yearBuilt, price, author: req.currentuser.id, location: {}, features: {}, extras: {} });
			
			property.location.address = address;
			property.location.coordinates[0] = Number(longitude);
			property.location.coordinates[1] = Number(latitude);
			
			property.features = { bedroom, bathroom, maxCapacity, floors, parking };
			property.extras = { is_tv, is_kitchen, is_ac, is_heating, is_internet, pets};

			if(req.currentuser.role.isAdmin){
				property.isActive = isActive;
				property.featured = featured;
				// property.handler = handler;
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
			const property = await Property.findById(propertyId).exec();
			errors.msg = "Property not found!";
			if(!porperty) return res.status(400).json(errors);
			return res.status(200).json(property);
		} catch(e) {
			errors.msg = e.message;
			return res.status(404).json(errors);
		};
	},

	update: async (req, res, next) =>{
		const errors = {};
		const propertyId = ObjectId(req.params.propertyId);
		const { description, propertyType, listingType, size, featured, yearBuilt, price, handler, author, bedroom, bathroom, maxCapacity, floors, parking, is_tv, is_kitchen, is_ac, is_heating, is_internet, pets, isActive, address, latitude, longitude } = req.body;

		try {
			let property = await Property.findById(propertyId).exec();

			const updateData = { description, propertyType, listingType, size, featured, yearBuilt, price, handler, author, bedroom, bathroom, maxCapacity, floors, parking, is_tv, is_kitchen, is_ac, is_heating, is_internet, pets, isActive, address, latitude, longitude, meta: {} };
			

			updateData.location.address = address;
			updateData.location.coordinates[0] = latitude;
			updateData.location.coordinates[1] = longitude;
			
			updateData.features = { bedroom, bathroom, maxCapacity, floors, parking };
			updateData.extras = { is_tv, is_kitchen, is_ac, is_heating, is_internet, pets};

			if(req.currentuser.isAdmin){
				updateData.handler = handler;
				updateData.isActive = isActive;
			};

			updateData.meta.lastUpdatedBy = req.currentuser.id;

			if(property.author._id.equals(req.currentuser.id)){
				property = await Property.findOneAndUpdate({ _id: propertyId }, { $set: updateData }, { new: true, runValidators: true }).exec();
				return res.status(200).json(property);
			} else{
				errors.msg = "You are not permitted to perform this action.";
				return res.status(401).json(errors);
			};
		} catch(e) {
			errors.msg = e.message;
			return res.status(404).json(errors);
		};
	},

	delete: async (req, res, next) =>{
		const errors = {};
		const { propertyId } = req.params;

		try {
			const property = await Property.findOneAndRemove({_id: propertyId}).exec();
			if(!property) return res.status(404).json({msg: "Property not found."});
			
			return res.status(200).json(property);
		} catch(e) {
			errors.msg = e.message;
			return res.status(404).json(errors);
		};
	}
};

module.exports = propertyCntrl;