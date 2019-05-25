"use strict";
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
const waterfall = require("async-waterfall");
const Employee = require('../Models/Employee');

const authCntrl = {
	signup: async (req, res, next) =>{
		const errors = {};
		const { firstName, lastName, email, password, phone } = req.body;
		/*
			. Encrypt user password before saving
			. generate token and send to user email
			. user click link with token to updated acct status to active
		*/
		try {
			let foundEmployee = await Employee.findOne({ email });
			
			if(foundEmployee){
				errors.mgs = `An employee with this email ${email} has already been registered.`;
				return res.status(400).json(errors);
			};
		
			const employee = new Employee({firstName, lastName, email, phone, password});
			
			const salt = await bcrypt.genSalt(10);
			employee.password = await bcrypt.hash(password, salt);
			
			await employee.save();
			return res.status(200).json("Employee has been added.");
		} catch(err) {
			console.log(err.message);
			return res.status(500).send("Server Error");
		};
	},
};

module.exports = authCntrl;