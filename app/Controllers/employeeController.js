"use strict";
const Employee = require('../Models/Employee');
const Property = require('../Models/Property');

const employeeCntrl = {
	currentuser: async (req, res, next) =>{
		const errors = {};
		const employeeId = req.currentuser.id;

		try {
			const employee = await Employee.findById(employeeId);
			const properties = await Property.find({author: employeeId});
			
			return res.status(200).json({info: employee.detailsToJSON(), properties});
		} catch(e) {
			errors.msg = e.message;
			return res.status(400).json(errors);
		};
	},

	update: async (req, res, next) =>{
		const updateData = {};
		const errors = {};
		let employee = req.currentuser.id;
		const { email, phone, firstName, lastName, password } = req.body;

		try {
			updateData.email = email;
			updateData.phone = phone;
			updateData.firstName = firstName;
			updateData.lastName = lastName;

			if(password){
				updateData.password = password;
			};
			
			employee = await Employee.findOneAndUpdate({_id: employee}, {$set: updateData}, {new: true});
			return res.status(200).json(employee);
		} catch(e) {
			errors.msg = e.message;
			return res.status(400).json(errors);
		};
	}
};

module.exports = employeeCntrl;