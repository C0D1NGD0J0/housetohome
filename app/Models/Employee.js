const mongoose = require("mongoose");
const md5 = require("md5");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
	firstName: {
		type: String,
		required: true,
		lowercase: true,
		maxlength: 25,
		minlength: 3,
		trim: true
	},
	lastName: {
		type: String,
		required: true,
		lowercase: true,
		maxlength: 25,
		minlength: 3,
		trim: true
	},
	email: {
		type: String,
		unique: true,
		index: true,
		lowercase: true,
		required: [true, "Email is required!"]
	},
	phone: {
		type: String,
		required: true,
		trim: true,
		minlength: 10,
		maxlength: 15
	},
	password:{
		type: String,
		required: true,
		minlength: 6
	},
	active: {type: Boolean, default: false},
	activationToken: {type: String, default: ""},
	activationTokenExpires: {type: Date, default: ""},
	passwordResetToken: {type: String, default:""},
	passwordResetExpires: {type: Date, default: ""},
	role: {type: String, default: "staff", lowercase: true},
	avatar: {type: String, default: "http://lorempixel.com/400/200/people"},
}, {timestamps: true});

EmployeeSchema.virtual("fullname").get(function(){
	return this.firstName + " " + this.lastName;
});

EmployeeSchema.virtual('gravatar').get(function(){
	const hash = md5(this.email);
	return `https://gravatar.com/avatar/${hash}?s=200`;
});

EmployeeSchema.methods.isAdmin = function(){
	return this.role === "admin";
};

EmployeeSchema.methods.detailsToJSON = function(){
	const employeeInfo = {
		_id: this._id,
		email: this.email,
		firstName: this.firstName,
		lastName: this.lastName,
		phone: this.phone
	};

	return employeeInfo;
};

const employee = mongoose.model("Employee", EmployeeSchema);

module.exports = employee;