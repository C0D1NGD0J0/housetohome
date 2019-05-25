const crypto = require("crypto");
const nodemailer = require("nodemailer");

const tokenGenerator = function(){
	const token = crypto.randomBytes(20).toString('hex');

	return token;
};

const sendRegistrationEmail = async function(req, receiver, token){
	const errors = {};

	let smtpTransport = nodemailer.createTransport({
		service: "Gmail",
		auth: {
			user: process.env.GMAIL_USERNAME,
			pass: process.env.GMAIL_PASSWORD
		}
	});

	let mailOptions = {
		to: receiver.email,
		from: `HouseToHome Property Management`,
		subject: "Employee Account Activation",
		html: `<h1>Click the provided link to activate your Employee Account</h1><hr>
			<h3>Welcome ${receiver.fullname},</h3>
			<p>You recently join the number one property management family in the country. To have access to our bespoke PMS (property management system) please click on the link below: </p>
			<h4><a href="https://${req.headers.host}/account_activation/${token}">Confirm Email to Activate Account</a></h4><br>
			<h5>Thank You.</h5>`
	};

	await smtpTransport.sendMail(mailOptions, function(err){
		if(!err){
			console.log(`Account activation email has been sent to ${receiver.fullname}`);
			return (`Account activation email has been sent to ${receiver.fullname}`);
		};
		return errors.mailError = err;
	});

	return errors;
};

module.exports = {
	tokenGenerator,
	sendRegistrationEmail
};