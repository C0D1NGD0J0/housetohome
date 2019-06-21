import axios from "axios";

export const setAuthHeaderToken = token =>{
	if(token){
		axios.defaults.headers.common["x-auth-token"] = token;
	} else {
		delete axios.defaults.headers.common["x-auth-token"]; 
	}
};

export const truncateText = (str, length = 1000) =>{
	const defaultLength = length;
	const trailingChar = "....";

	if(str.length > defaultLength){
		return str.substring(0, defaultLength) + trailingChar;
	};

	return str;
};