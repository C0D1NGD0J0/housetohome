"use strict";
const Property = require('../Models/Property');
const { ObjectId } = require('mongoose').Types;

const propertyCntrl = {
	index: async (req, res, next) =>{
		const errors = {};
		try {
			const properties = await Property.find({ active: true }).sort({ createdAt: -1});
			return res.status(200).json(properties);
		} catch(err) {
			errors.msg = err.message;
			return res.status(404).json(errors);
		};
	},

	create: async (req, res, next) =>{
		const errors = {};
		const {description, propertyType, listingType, size, featured, yearBuilt, price, handler, author, address, features, extras, active, } = req.body;
		
		try {			
			let property = new Property({ description, propertyType, listingType, size, yearBuilt, price, author: req.currentuser.id, address, features, extras });

			if(req.currentuser.isAdmin){
				property.active = active;
				property.featured = featured;
				property.handler = req.currentuser.id;
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
			const property = await Property.findById(propertyId);
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
		const {description, propertyType, listingType, size, featured, yearBuilt, price, author, address, features, extras, handler, active } = req.body;

		try {
			let property = await Property.findById(propertyId).exec();
			const updateData = { description, propertyType, listingType, size, featured, yearBuilt, price, address, features, extras, meta: {} };

			if(req.currentuser.isAdmin){
				updateData.handler = handler;
				updateData.active = active;
			};

			updateData.meta.lastUpdatedBy = req.currentuser.id;
			if(property.author._id.equals(req.currentuser.id)){
				property = await Property.findOneAndUpdate({ _id: propertyId }, { $set: updateData }, { new: true });
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

	destroy: async (req, res, next) =>{
		const errors = {};
		const { propertyId } = req.params;

		try {
			const property = await Property.findOneAndRemove({_id: propertyId});
			if(!property) return res.status(404).json({msg: "Property not found."});
			
			return res.status(200).json(property);
		} catch(e) {
			errors.msg = e.message;
			return res.status(404).json(errors);
		};
	}
};

module.exports = propertyCntrl;