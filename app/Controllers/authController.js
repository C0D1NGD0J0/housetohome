"use strict";
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
const waterfall = require("async-waterfall");
const Employee = require('../Models/Employee');

const authCntrl = {
	signup: (req, res, next) =>{
		
	},
};

module.exports = authCntrl;