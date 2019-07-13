const crypto = require("crypto");
const nodemailer = require("nodemailer");
const moment = require("moment");

const tokenGenerator = function(){
	const token = crypto.randomBytes(20).toString('hex');

	return token;
};

const sendEmail = async function(req, type, receiver, token){
	const errors = {};

	let smtpTransport = nodemailer.createTransport({
		service: "Gmail",
		auth: {
			user: process.env.GMAIL_USERNAME,
			pass: process.env.GMAIL_PASSWORD
		}
	});

	const msgType = {
		acctActivation: {
			title: "Employee Account Activation",
			msg: `<h1>Click the provided link to activate your Employee Account</h1><hr>
			<h3>Welcome ${receiver.fullname},</h3>
			<p>You recently join the number one property management family in the country. To have access to our bespoke PMS (property management system) please click on the link below: </p>
			<h4><a href="http://${req.headers.host}/account_activation/${token}">Confirm Email to Activate Account</a></h4><br>
			<h5>Thank You.</h5>`,
		},

		pwdReset: {
			title: "Request to reset Password",
			msg: `<h1>Click the provided link to Reset your Password</h1><hr>
			<p>You are receiving this email becasue you requested to reset your password on HouseToHome employee portal.</p>
			<h3><a href=http:${req.headers.host}/reset_password/${token}>Reset Password</a></h3>
			<p>If you didn't request this, please kindly ignore this email and your password will remain unchanged"</p>`,
		},

		guestActivation: {
			title: "Account Activation",
			msg: `<h1>Click the provided link to activate your Guest Account</h1><hr>
			<h3>Welcome ${receiver.fullname},</h3>
			<p>You recently registered on the number one property management compnay in the country. To have access to your bookings and reservations please click on the link below: </p>
			<h4><a href="http://${req.headers.host}/account_activation/${token}">Confirm Email to Activate Account</a></h4><br>
			<h5>Thank You.</h5>`,
		}
	};

	let mailOptions = {
		to: receiver.email,
		from: `HouseToHome Property Management`,
		subject: msgType[type].title,
		html: msgType[type].msg
	};
	
	await smtpTransport.sendMail(mailOptions, function(err){
		if(!err){
			console.log(`Account activation email has been sent to ${receiver.fullname}`);
			return (`Account activation email has been sent to ${receiver.fullname} inbox.`);
		};
		return errors.mailError = err;
	});
};

const subtractDates = function(startDate, endDate){
	if(startDate === 'undefined' || endDate === 'undefined') return "No date values provided";

	let date1, date2, noDays;

	date1 = moment(startDate);
	date2 = moment(endDate);
	
	return noDays = date2.diff(date1, 'days');
};

module.exports = {
	tokenGenerator,
	sendEmail,
	subtractDates
};