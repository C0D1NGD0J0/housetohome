"use strict";
const Validator = require("validator");

const validate = {
	signup: (req, res, next) =>{
		let errors = {};
		let data = req.body;

		data.email = !isEmpty(data.email) ? data.email : "";
		data.phone = !isEmpty(data.phone) ? data.phone : "";
		data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
		data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
		data.password = !isEmpty(data.password) ? data.password : "";

		if(Validator.isEmpty(data.firstName)){
			errors.firstName = "Employee first name is required";
		};

		if(Validator.isEmpty(data.lastName)){
			errors.firstName = "Employee last name is required";
		};

		if(!Validator.isLength(data.firstName, {min: 3, max: 20})){
			errors.firstName = `${data.firstName} must be between 3-20 characters.`;
		};

		if(!Validator.isLength(data.lastName, {min: 3, max: 20})){
			errors.lastName = `${data.lastName} must be between 3-20 characters.`;
		};

		if(Validator.isEmpty(data.email)){
			errors.email = "Email is required.";
		};

		if(!Validator.isEmail(data.email)){
			errors.email = "Email format is invalid.";
		};

		if(Validator.isEmpty(data.password)){
			errors.password = "Password field is required.";
		};

		if(!Validator.isLength(data.password, {min: 6, max: 15})){
			errors.password = "Password must be at least 6 characters long.";
		};

		if(Validator.isEmpty(data.phone)){
			errors.phone = "Phone number is required.";
		};

		if(!Validator.isLength(data.phone, {min: 10, max: 15})){
			errors.password = "Phone must be at least 10 characters long.";
		};

		if(!isEmpty(errors)){
			return res.status(400).json(errors);
		};

		next();
	}
};

function isEmpty(value){
	return(
		value === "undefined" || 
		value === null || 
		(typeof value === "object" && Object.keys(value).length === 0) || 
		(typeof value === "string" && value.trim().length === 0)
	);
};

module.exports = {validate};