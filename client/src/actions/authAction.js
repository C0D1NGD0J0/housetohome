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
			const decoded = jwtDecode(localStorage.token);

			// const res = await axios.get("/api/users/currentuser");
			// const info = {...decoded};
			return dispatch({ type: LOAD_CURRENTUSER, payload: {info: decoded} });
		};
	} catch(err) {
		dispatch(handleError(err.message));
		return setTimeout(() => dispatch(clearErrors()), 5000);
	};
};

export const logoutAction = () => dispatch =>{
	dispatch({ type: LOGOUT_CURRENTUSER, payload: {} });
	dispatch(setAlertAction("Logout successful...", "success"));
	return window.location.href = "/";
};

export const forgotPasswordAction = (userdata) => dispatch =>{
	const config = { headers: { 'Content-Type': 'application/json' } };
	const data = JSON.stringify(userdata);

	axios.post("/api/auth/forgot_password", data, config).then((res) =>{
		return dispatch(setAlertAction(res.data.msg, "success"));
	}).catch((err) => {
		if(err.response.data.msg){
			return dispatch(setAlertAction(err.response.data.msg, 'danger'));
		} else{
			dispatch(handleFormError(err.response.data));
			return setTimeout(() => dispatch(clearErrors()), 3000);
		};
	});
};

export const resetPasswordAction = (userdata) => dispatch =>{
	const config = { headers: { 'Content-Type': 'application/json' } };
	const data = JSON.stringify({password: userdata.password, password2: userdata.password2});
	
	axios.post(`/api/auth/reset_password/${userdata.token}`, data, config).then((res) =>{
		dispatch(setAlertAction(res.data.msg, "success"));
		return history.push("/login");
	}).catch((err) => {
		if(err.response.data.msg){
			return dispatch(setAlertAction(err.response.data.msg, 'danger'));
		} else{
			dispatch(handleFormError(err.response.data));
			return setTimeout(() => dispatch(clearErrors()), 3000);
		};
	});
};