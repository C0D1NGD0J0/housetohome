const crypto = require("crypto");
const nodemailer = require("nodemailer");

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
		acctActivation: `<h1>Click the provided link to activate your Employee Account</h1><hr>
			<h3>Welcome ${receiver.fullname},</h3>
			<p>You recently join the number one property management family in the country. To have access to our bespoke PMS (property management system) please click on the link below: </p>
			<h4><a href="http://${req.headers.host}/account_activation/${token}">Confirm Email to Activate Account</a></h4><br>
			<h5>Thank You.</h5>`,

		pwdReset:`<h1>Click the provided link to Reset your Password</h1><hr>
		<p>You are receiving this email becasue you requested to reset your password on HouseToHome employee portal.</p>
		<h3><a href=http:${req.headers.host}/reset/${token}>Reset Password</a></h3>
		<p>If you didn't request this, please kindly ignore this email and your password will remain unchanged"</p>`
	};

	let mailOptions = {
		to: receiver.email,
		from: `HouseToHome Property Management`,
		subject: "Employee Account Activation",
		html: msgType[type]
	};
	
	console.log(mailOptions);
	// await smtpTransport.sendMail(mailOptions, function(err){
	// 	if(!err){
	// 		console.log(`Account activation email has been sent to ${receiver.fullname}`);
	// 		return (`Account activation email has been sent to ${receiver.fullname}`);
	// 	};
	// 	return errors.mailError = err;
	// });
};

module.exports = {
	tokenGenerator,
	sendEmail
};