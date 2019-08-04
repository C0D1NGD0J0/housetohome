"use strict";
const User = require('../Models/User');
const Property = require('../Models/Property');

const adminCntrl = {
	dashboard: async (req, res, next) =>{
		const errors = {};
		const listingsCount = await Property.getListingCount();
		const newListings = await Property.find({}).sort({createdAt: 'asc'}).select("listingType propertyType location.address").limit(5);
		const newUsers = await User.find({}).sort({createdAt: 'asc'}).select("firstName lastName email role").limit(5);
		return res.json({newUsers, newListings, listingsCount});
	},

	users: async (req, res, next) =>{
		const errors = {};
		const { usertype } = req.query;
		let query;
		
		if(usertype === 'all' || usertype == ""){
			query = {}
		} else {
			query = {
				role: usertype
			}
		};

		try {
			let users = await User.find(query).exec();
			users = users.filter((user) => user.id !== req.currentuser.id).map((item, i) => item.detailsToJSON());
			return res.status(200).json(users);
		} catch(e) {
			errors.msg = e.message;
			return res.status(404).json(errors);
		};
	},

	user: async (req, res, next) =>{
		const errors = {};
		const { userId } = req.params;
		try {
			let user = await User.findById(userId).exec();
			let properties = await Property.find({author: user.id}).exec();

			return res.status(200).json({info: user.detailsToJSON(), properties});
		} catch(e) {
			errors.msg = e.message;
			return res.status(400).json(errors);
		};
	},

	updateUserRole: async (req, res, next) =>{
		const errors = {};
		const roles = ['staff', 'admin'];
		const { userId } = req.params;

		try {
			let user = await User.findOne({_id: userId}).exec();
			if(user.role === 'admin') {
				user.role = 'staff';
			} else if (user.role === 'staff') {
				user.role = 'admin';
			};

			await employee.save();
			return res.status(200).json(employee.detailsToJSON());
		} catch(e) {
			errors.msg = e.message;
			return res.status(404).json(errors);
		};
	},

	properties: async (req, res, next) =>{
		const errors = {};
		try {
			const properties = await Property.find({}).sort({ createdAt: -1});
			return res.status(200).json(properties);
		} catch(err) {
			errors.msg = err.message;
			return res.status(404).json(errors);
		};
	}
};

module.exports = adminCntrl;