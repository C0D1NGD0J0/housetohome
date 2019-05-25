"use strict";
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const { sendRegistrationEmail, tokenGenerator } = require("../Helpers/utils");
const Employee = require('../Models/Employee');

const authCntrl = {
	signup: async (req, res, next) =>{
		const errors = {};
		const token = tokenGenerator();
		const { firstName, lastName, email, password, phone } = req.body;
		
		try {
			let foundEmployee = await Employee.findOne({ email });
			
			if(foundEmployee){
				errors.mgs = `An employee with this email ${email} has already been registered.`;
				return res.status(400).json(errors);
			};
			
			const employee = new Employee({firstName, lastName, email, phone, password});
			const salt = await bcrypt.genSalt(10);
				
			employee.password = await bcrypt.hash(password, salt);
			employee.activationToken = token;
			employee.activationTokenExpires = (Date.now() + (3600000 * 2)); //expires in 2hrs
			await employee.save();
			await sendRegistrationEmail(req, employee, token);

			return res.status(200).json("Employee has been added.");
		} catch(err) {
			console.log(err.message);
			return res.status(500).send("Server Error");
		};
	},
};

module.exports = authCntrl;