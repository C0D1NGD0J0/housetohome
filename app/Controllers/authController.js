"use strict";
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const { sendRegistrationEmail, tokenGenerator } = require("../Helpers/utils");
const Employee = require('../Models/Employee');

const authCntrl = {
	signup: async (req, res, next) =>{
		/*
			TODO:
				. only admins can register employees
		*/
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

	login: async (req, res, next) =>{
		const errors = {};
		const { email, password } = req.body;

		try {
			const employee = await Employee.findOne({ email });
			if(!employee.active){
				errors.msg = "Please activate your account to access employee portal.";
				return res.status(401).json(errors);
			};

			const passwordmatch = await bcrypt.compare(password, employee.password);
			if(passwordmatch){
				const payload = { ...employee.detailsToJSON() };
				const token = await jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: "9h"});
				
				return res.status(200).json({token: `Bearer ${token}`});
			};

			throw new Error("Invalid email/password combination.");
		} catch(err) {
			errors.msg = err.message;
			return res.status(400).json(errors);
		}
	}
};

module.exports = authCntrl;