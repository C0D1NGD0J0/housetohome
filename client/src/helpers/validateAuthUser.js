import { setAuthHeaderToken } from ".";
import store from "../store/";
import { loadUserAction } from "../actions/authAction";

if(localStorage.token){
	setAuthHeaderToken(localStorage.token);
};

store.dispatch(loadUserAction());