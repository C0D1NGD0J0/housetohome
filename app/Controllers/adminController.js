"use strict";
const Employee = require('../Models/Employee');
const Property = require('../Models/Property');

const adminCntrl = {
	employees: async (req, res, next) =>{
		const errors = {};
		try {
			let employees = await Employee.find({}).exec();
			employees = employees.map((item, i) => item.detailsToJSON());
			return res.status(200).json(employees);
		} catch(e) {
			errors.msg = e.message;
			return res.status(404).json(errors);
		};
	},

	employee: async (req, res, next) =>{
		const errors = {};
		const { employeeId } = req.params;
		try {
			let employee = await Employee.findById(employeeId).exec();
			let properties = await Property.find({author: employee.id}).exec();

			return res.status(200).json({info: employee.detailsToJSON(), properties});
		} catch(e) {
			errors.msg = e.message;
			return res.status(400).json(errors);
		};
	}
};

module.exports = adminCntrl;