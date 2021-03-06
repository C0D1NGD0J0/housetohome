"use strict";
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const { sendEmail, tokenGenerator } = require("../Helpers/utils");
const User = require('../Models/User');
const ROLES = ["guest", "employee"];

const authCntrl = {
	signupGuest: async (req, res, next) =>{
		const errors = {};
		const token = tokenGenerator();
		const { firstName, lastName, email, password, phone } = req.body;
		
		try {
			let foundUser = await User.findOne({ email });
			
			if(foundUser){
				errors.mgs = `This email ${email} has already been taken.`;
				return res.status(404).json(errors);
			};
			
			const user = new User({firstName, lastName, email, phone, password});
			const salt = await bcrypt.genSalt(10);
				
			user.password = await bcrypt.hash(password, salt);
			user.activationToken = token;
			user.activationTokenExpires = (Date.now() + (3600000 * 2)); //expires in 2hrs
			await user.save();
			sendEmail(req, "guestActivation", user, token);

			return res.status(200).json({msg: "Check your email to complete signup process."});
		} catch(err) {
			errors.msg = err.message;
			return res.status(500).json(errors);
		};
	},

	signupEmployee: async (req, res, next) =>{
		const errors = {};
		const token = tokenGenerator();
		const { firstName, lastName, email, password, phone } = req.body;
		
		try {
			let foundUser = await User.findOne({ email });
			
			if(foundUser){
				errors.mgs = `The email: ${email} has already been taken.`;
				return res.status(400).json(errors);
			};
			
			if(req.currentuser.isadmin){
				const user = new User({firstName, lastName, email, phone, password, role: ROLES[1]});
				const salt = await bcrypt.genSalt(10);
					
				user.password = await bcrypt.hash(password, salt);
				user.activationToken = token;
				user.activationTokenExpires = (Date.now() + (3600000 * 2)); //expires in 2hrs
				await user.save();
				sendEmail(req, "acctActivation", user, token);

				return res.status(200).json({ msg: "Employee has been added.", user: user.detailsToJSON() });
			};

			errors.msg = "Unathourized to perform this action";
			return res.status(401).json(errors);
		} catch(err) {
			errors.msg = err.message;
			return res.status(500).json(errors);
		};
	},

	activateAcct: async (req, res, next) =>{
		const errors = {};
		const { token } = req.params;

		try {
			const user = await User.findOne({ activationToken: token, activationTokenExpires: {$gt: Date.now() }
			});			
			
			if(user){
				user.active = true;
				user.activationToken = "";
				user.activationTokenExpires = "";
								
				await user.save();
				return res.status(200).json({msg: "Your account has been activated."});
			};

			throw new Error("Oops!!, invalid token/email combination provided, contact IT department.");
		} catch(err) {
			errors.msg = err.message;
			return res.status(404).json(errros);
		};
	},

	login: async (req, res, next) =>{
		const errors = {};
		const { email, password } = req.body;
	
		try {
			const user = await User.findOne({ email });
			if(!user){
				errors.msg = "Invalid email/password combination.";
				return res.status(401).json(errors);
			};
			
			if(!user.active){
				errors.msg = "Please activate your account!.";
				return res.status(401).json(errors);
			};

			const isMatch = await bcrypt.compare(password, user.password);
			if(isMatch){
				const payload = { ...user.detailsToJSON() };
				const token = await jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: "4h"});
				
				return res.status(200).json({ token });
			} else {
				errors.msg = "Invalid email/password combination.";
				return res.status(400).json(errors);
			};
		} catch(err) {
			errors.msg = err.message;
			return res.status(400).json(errors);
		}
	},

	forgotPwd: async (req, res, next) =>{
		const token = await tokenGenerator();
		const { email } = req.body;
		const errors = {};

		try {
			const user = await User.findOne({ email });
			if(user){
				user.passwordResetToken = token;
				user.passwordResetExpires = Date.now() + 7200000; //2hrs

				await user.save();
				sendEmail(req, "pwdReset", user, token);

				return res.status(200).json({msg: "kindly check your email for further instructions."});
			};		
			
			return res.status(404).json({msg: "Invalid email provided."})
		} catch(e) {
			errors.msg = e.message;
			return res.status(404).json(errors);
		};
	},

	resetPwd: async (req, res, next) =>{
		const { token } = req.params;
		const { password } = req.body;
		const errors = {};
		
		try {
			const user = await User.findOne({ passwordResetToken: token, passwordResetExpires: {$gt: Date.now()}});
			if(user){
				user.password = bcrypt.hashSync(password, 10);
				user.passwordResetToken = "";
				user.passwordResetExpires = "";
				
				await user.save();
				return res.status(200).json({msg: "Password reset was successful."});
			};
			return res.status(404).json({msg: "invalid reset token, please generate a new token."});
		} catch(err) {
			errors.msg = e.message;
			return res.status(404).json(errors);
		}
	}
};

module.exports = authCntrl;