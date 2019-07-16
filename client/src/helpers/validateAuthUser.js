import store from "../store/";
import { loadUserAction, logoutAction } from "../actions/authAction";
import jwtDecode from "jwt-decode";
import {setAuthHeaderToken} from "./";
import history from "./history";

export const validateCurrentUser = () =>{
	if(localStorage.token){
		setAuthHeaderToken(localStorage.token);
		store.dispatch(loadUserAction());
		
		const decoded = jwtDecode(localStorage.token);
		const currentTime = (Date.now().valueOf() / 1000);
		if(decoded.exp < currentTime) {
			localStorage.removeItem('token');
			store.dispatch(logoutAction());
			return history.push("/properties");
		};
	};
};
