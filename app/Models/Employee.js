const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const md5 = require("md5");

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

// defines indexes to help when searching
EmployeeSchema.index({
	email: "text",
	firstName: "text",
	lastName: "text"
});

EmployeeSchema.methods.fullname = function(){
	return this.firstName + " " + this.lastName;
};

EmployeeSchema.methods.getGravatar = function(){
	const hash = md5(this.email);
	return `https://gravatar.com/avatar/${hash}?s=200`;
};

EmployeeSchema.methods.detailsToJSON = function(){
	const employeeInfo = {
		id: this._id,
		email: this.email,
		firstName: this.firstName,
		lastName: this.lastName,
		phone: this.phone,
		avatar: this.avatar,
		isAdmin: this.role === 'admin' ? true : false
	};
	
	return employeeInfo;
};

const employee = mongoose.model("Employee", EmployeeSchema);

module.exports = employee;