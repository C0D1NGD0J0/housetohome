"use strict";
const User = require('../Models/User');
const Property = require('../Models/Property');
const bcrypt = require("bcryptjs");

const userCntrl = {
	currentuser: async (req, res, next) =>{
		const errors = {};
		const userId = req.currentuser.id;

		try {
			const user = await User.findById(userId);
			const properties = await Property.find({author: user.id}).exec();

			return res.status(200).json({info: user.detailsToJSON(), properties});
		} catch(e) {
			errors.msg = e.message;
			return res.status(400).json(errors);
		};
	},

	update: async (req, res, next) =>{
		const updateData = {};
		const errors = {};
		let user = req.currentuser.id;
		const { email, phone, firstName, lastName, password } = req.body;

		try {
			updateData.email = email;
			updateData.phone = phone;
			updateData.firstName = firstName;
			updateData.lastName = lastName;

			if(password){
				const salt = await bcrypt.genSalt(10);
				updateData.password = await bcrypt.hash(password, salt);
			};
			
			user = await User.findOneAndUpdate({_id: user}, {$set: updateData}, {new: true});	
			return res.status(200).json(user.detailsToJSON());
		} catch(e) {
			errors.msg = e.message;
			return res.status(400).json(errors);
		};
	},

	delete: async (req, res, next) =>{
		const errors = {};
		const { userId } = req.params;

		try {
			const user = await User.findOneAndRemove({_id: userId}).exec();
			return res.status(200).json({msg: "Your account has been deleted..."});
		} catch(e) {
			errors.msg = e.message;
			return res.status(404).json(errors);
		};
	}
};

module.exports = userCntrl;