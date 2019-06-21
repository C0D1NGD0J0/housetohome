import { setAuthHeaderToken } from ".";
import store from "../store/";
import { loadUserAction, logoutAction } from "../actions/authAction";
import jwtDecode from "jwt-decode";

if(localStorage.token){
	const decoded = jwtDecode(localStorage.token);
	store.dispatch(loadUserAction());

	const currentTime = (Date.now().valueOf() / 1000);
	if(decoded.exp < currentTime) {
		localStorage.removeItem('token');
		store.dispatch(logoutAction());
	};
};
