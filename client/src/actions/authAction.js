import axios from "axios";
import { handleFormError, clearErrors, handleError, clearAuthErrors } from "./utilAction";
import { SET_TOKEN, LOAD_CURRENTUSER, LOGOUT_CURRENTUSER } from "./types";
import { setAlertAction } from "./alertAction";
import { setAuthToken } from "../helpers/";

export const registerAction = (userdata, history) => async dispatch =>{
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const data = JSON.stringify(userdata);
	try {
		const res = await axios.post("/api/auth/signup", userdata, config);
		dispatch(setAlertAction(res.data.msg, "success"));
		dispatch(clearErrors());
		return history.push("/login");
	} catch(err) {
		dispatch(handleFormError(err.response.data));
		return setTimeout(() => dispatch(clearErrors()), 3000);
	};
};

export const loginAction = (userdata) => async dispatch =>{
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const data = JSON.stringify(userdata);

	try {
		const res = await axios.post("/api/auth/login", userdata, config);
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
	if(localStorage.token){
		setAuthToken(localStorage.token);
	};

	try {
		const res = await axios.get("/api/users/currentuser");
		return dispatch({
			type: LOAD_CURRENTUSER,
			payload: res.data.info
		});
	} catch(err) {
		return dispatch(handleError(err.response.data));
	};
};

export const logoutAction = () => async dispatch =>{
	dispatch({type: LOGOUT_CURRENTUSER, payload: {}});
	dispatch(setAlertAction("Logout successful...", "success"));
	return window.location = "/";
};