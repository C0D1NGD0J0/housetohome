import { setAuthHeaderToken } from ".";
import store from "../store/";
import { loadUserAction, logoutAction } from "../actions/authAction";
import jwtDecode from "jwt-decode";

export const validateCurrentUser = () =>{
	if(localStorage.token){
		const decoded = jwtDecode(localStorage.token);
		store.dispatch(loadUserAction());

		const currentTime = (Date.now().valueOf() / 1000);
		console.log(currentTime, decoded.exp);
		if(decoded.exp < currentTime) {
			localStorage.removeItem('token');
			store.dispatch(logoutAction());
		};
	};
};
