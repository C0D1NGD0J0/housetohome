const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const md5 = require("md5");

const UserSchema = new Schema({
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
	role: {type: String, default: "guest", lowercase: true},
	likedProperty: [{type: Schema.Types.ObjectId, ref: 'Property'}],
	avatar: {type: String},
}, {timestamps: true});

// defines indexes to help when searching
UserSchema.index({
	email: "text",
	firstName: "text",
	lastName: "text"
});

UserSchema.set('toObject', { virtuals: true });
UserSchema.set('toJSON', { virtuals: true });

UserSchema.virtual("fullname").get(function(){
	return `${this.firstName} ${this.lastName}`;
});

UserSchema.methods.getGravatar = function(){
	const hash = md5(this.email);
	return `https://gravatar.com/avatar/${hash}?s=200`;
};

UserSchema.methods.userRole = function(){
	switch(this.role){
		case 'admin':
			return {isAdmin: true};
		case 'staff':
			return {isStaff: true};
		case 'guest':
			return {isGuest: true};
		default:
			return this.role;
	}
};

UserSchema.methods.detailsToJSON = function(user){
	const userinfo = {
		id: this._id,
		email: this.email,
		firstName: this.firstName,
		lastName: this.lastName,
		phone: this.phone,
		role: this.userRole()
	};

	return userinfo;
};

// UserSchema.methods.guestDetailsToJSON = function(user){
// 	const userinfo = {
// 		id: this._id,
// 		email: this.email,
// 		firstName: this.firstName,
// 		lastName: this.lastName,
// 		phone: this.phone
// 	};
	
	

// 	return userinfo;
// };

const user = mongoose.model("User", UserSchema);

module.exports = user;