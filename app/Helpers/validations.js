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
		data.password2 = !isEmpty(data.password2) ? data.password2 : "";

		if(Validator.isEmpty(data.firstName)){
			errors.firstName = "First name is required";
		};

		if(Validator.isEmpty(data.lastName)){
			errors.lastName = "Last name is required";
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
			errors.phone = "Phone must be at least 10 characters long.";
		};
		
		if(data.password2){
			if(Validator.isEmpty(data.password2)){
				errors.password2 = "Confirm Password field is required.";
			};

			if(!Validator.equals(data.password, data.password2)){
				errors.password2 = "Passwords must match.";
			}
		};

		if(!isEmpty(errors)){
			return res.status(400).json(errors);
		};

		next();
	},

	login: (req, res, next) =>{
		const errors = {};
		const data = req.body;

		data.email = !isEmpty(data.email) ? data.email : "";
		data.password = !isEmpty(data.password) ? data.password : "";

		if(!Validator.isEmail(data.email)){
			errors.email = "Email is invalid.";
		};
		
		if(Validator.isEmpty(data.email)){
			errors.email = "Email field is required.";
		};

		if(Validator.isEmpty(data.password)){
			errors.password = "Password field is required.";
		};
		
		if(!isEmpty(errors)){
			return res.status(400).json(errors);
		};

		next();
	},

	emailAddress: (req, res, next) =>{
		const errors = {};
		const data = req.body;

		if(!Validator.isEmail(data.email)){
			errors.email = "Email format is invalid.";
		};

		if(isEmpty(data.email)){
			errors.email = "Email needs to be provided.";
		};

		if(!isEmpty(errors)){
			return res.status(400).json(errors);
		};

		next();
	},

	pwdReset: (req, res, next) =>{
		const errors = {};
		const data = req.body;

		data.password = !isEmpty(data.password) ? data.password : "";
		data.password2 = !isEmpty(data.password2) ? data.password2 : "";

		if(Validator.isEmpty(data.password)){
			errors.password = "Password field is required";
		}

		if(!Validator.isLength(data.password, {min: 6, max: 15})){
			errors.password = "Password must be at least 6 characters";
		}

		if(Validator.isEmpty(data.password2)){
			errors.password2 = "Confirm password field is required";
		}

		if(!Validator.equals(data.password, data.password2)){
			errors.password2 = "Passwords must match.";
		}

		if(!isEmpty(errors)){
			return res.status(400).json(errors);
		};

		next();
	},

	property: (req, res, next) =>{
		const errors = {};
		const data = req.body;

		data.description = !isEmpty(data.description) ? data.description : "" ;
		data.propertyType = !isEmpty(data.propertyType) ? data.propertyType : "" ;
		data.size = !isEmpty(data.size) ? data.size : "" ;
		data.yearBuilt = !isEmpty(data.yearBuilt) ? data.yearBuilt : "" ;
		data.price = !isEmpty(data.price) ? data.price : "" ;

		if(Validator.isEmpty(data.description)){
			errors.description = "Property description needs to be provided.";
		};

		if(!Validator.isLength(data.description, {min: 20})){
			errors.description = "Property description is too short.";
		};

		if(Validator.isEmpty(data.propertyType)){
			errors.propertyType = "Property type value needs to be provided.";
		};

		if(Validator.isEmpty(data.size)){
			errors.size = "Property size value needs to be provided.";
		};

		if(!Validator.isNumeric(data.size)){
			errors.size = "Property size value needs to be number.";
		};

		if(Validator.isEmpty(data.yearBuilt)){
			errors.yearBuilt = "Year property was built needs to be provided.";
		};

		if(Validator.isEmpty(data.price)){
			errors.price = "Property price needs to be provided.";
		};

		if(!Validator.isCurrency(data.price,{
			decimal_separator: ".", allow_negatives: false, require_symbol: false, digits_after_decimal: [2]
			})){
			errors.price = "Property price is not a valid format.";
		};

		if(!isEmpty(errors)){
			return res.status(400).json(errors);
		};

		next();
	},

	userInfo: (req, res, next) =>{
		let errors = {};
		let data = req.body;

		data.email = !isEmpty(data.email) ? data.email : "";
		data.phone = !isEmpty(data.phone) ? data.phone : "";
		data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
		data.lastName = !isEmpty(data.lastName) ? data.lastName : "";

		if(Validator.isEmpty(data.firstName)){
			errors.firstName = "First name is required";
		};

		if(Validator.isEmpty(data.lastName)){
			errors.firstName = "Fast name is required";
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

		if(Validator.isEmpty(data.phone)){
			errors.phone = "Phone number is required.";
		};

		if(!Validator.isLength(data.phone, {min: 10, max: 15})){
			errors.phone = "Phone must be at least 10 characters long.";
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



// address: {
// 	postCode
// 	unitNo
// 	state
// 	street
// 	city
// 	country
// }