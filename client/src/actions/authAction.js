import axios from "axios";
import { handleFormError, clearErrors, handleError } from "./utilAction";
import { SET_TOKEN, LOAD_CURRENTUSER, LOGOUT_CURRENTUSER } from "./types";
import { setAlertAction } from "./alertAction";
import { setAuthHeaderToken } from "../helpers/";
import jwtDecode from "jwt-decode";
import history from "../helpers/history";

export const registerAction = (userdata) => async dispatch =>{
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const data = JSON.stringify(userdata);
	try {
		const res = await axios.post("/api/auth/signup", data, config);
		dispatch(setAlertAction(res.data.msg, "success"));
		dispatch(clearErrors());
		return history.push("/login");
	} catch(err) {
		dispatch(handleFormError(err.response.data));
		return setTimeout(() => dispatch(clearErrors()), 3000);
	};
};

export const loginAction = (userdata) => async dispatch =>{
	const config = { headers: { 'Content-Type': 'application/json' } };
	const data = JSON.stringify(userdata);

	try {
		const res = await axios.post("/api/auth/login", data, config);
		dispatch(setAlertAction("Login was successful", "success"));
		dispatch({type: SET_TOKEN, payload: res.data});
		return dispatch(loadUserAction());
	} catch(err) {
		if(err.response.data.msg){
			return dispatch(setAlertAction(err.response.data.msg, 'danger'));
		}else {
			dispatch(handleFormError(err.response.data));
			return setTimeout(() => dispatch(clearErrors()), 3000);
		};
	};
};

export const loadUserAction = () => async dispatch =>{
	try {
		if(localStorage.token){
			setAuthHeaderToken(localStorage.token);
			const res = await axios.get("/api/users/currentuser");
			
			const { info } = res.data;
			const decoded = jwtDecode(localStorage.token);
			const currentTime = Math.floor(Date.now().valueOf() / 1000);
			
			if(decoded.exp <= currentTime) return dispatch(logoutAction());
			return dispatch({ type: LOAD_CURRENTUSER, payload: info });
		};
	} catch(err) {
		dispatch(handleError(err.message));
		return setTimeout(() => dispatch(clearErrors()), 5000);
	};
};

export const logoutAction = () => dispatch =>{
	dispatch({ type: LOGOUT_CURRENTUSER, payload: {} });
	dispatch(setAlertAction("Logout successful...", "success"));
	return history.push("/");
};