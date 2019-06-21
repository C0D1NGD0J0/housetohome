"use strict";
const jwt = require("jsonwebtoken");

const isAuthorized = function(req, res, next){
	// Get token from header
	const token = req.header("x-auth-token");
	
	if(!token){
		return res.status(401).json({msg: "Authorization denied!, token not provided."});
	};

	try {
		const decoded = jwt.verify(token, process.env.SECRET_KEY);
		req.currentuser = { ...decoded };
		next();
	} catch(err) {
		return res.status(401).json({msg: err.message});
	};
};

const isAuthorizedAsAdmin = function(req, res, next){
	// Get token from header
	const token = req.header("x-auth-token");
	
	if(!token){
		return res.status(401).json({msg: "Authorization denied!, token not provided."});
	};
	
	const decoded = jwt.verify(token, process.env.SECRET_KEY);
	req.currentuser = { ...decoded };
	if(req.currentuser.role === "employee") return next();
	
	return res.status(401).json({msg: "Access Denied!!"});
};

const isAuthorizedAsStaff = function(req, res, next){
	// Get token from header
	const token = req.header("x-auth-token");
	
	if(!token){
		return res.status(401).json({msg: "Authorization denied!, token not provided."});
	};
	
	const decoded = jwt.verify(token, process.env.SECRET_KEY);
	req.currentuser = { ...decoded };
	if(req.currentuser.role.isAdmin || req.currentuser.role.isStaff) return next();
	
	return res.status(401).json({msg: "Access Denied!!"});
};

module.exports = { isAuthorized, isAuthorizedAsAdmin, isAuthorizedAsStaff };