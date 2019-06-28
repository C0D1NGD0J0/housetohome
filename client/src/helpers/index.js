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

export const formatDisplayPrice = (symbl, listing) =>{
	if(!listing) return "00.00";

	switch (listing.listingType) {
		case "rent":
		case "lease":
			return `${symbl}${listing.price.toFixed(2)} /month`;
		case "sale":
			return `${symbl}${listing.price.toFixed(2)}`;
		default:
			return `${symbl}${listing.price.toFixed(2)}`;
	}	
};