import axios from "axios";
import { handleFormError, clearErrors, handleError } from "./utilAction";
import { ADD_NEW_EMPLOYEE, GET_ALL_USERS, ADMIN_LOAD_LISTINGS, CREATE_NEW_LISTNG, UPDATE_LISTING, ADMIN_SHOW_USER, DELETE_LISTING } from "./types";
import { setAlertAction } from "./alertAction";
import history from "../helpers/history";

export const registerEmployeeAction = (userdata, history) => async dispatch =>{
	const config = {headers: { 'Content-Type': 'application/json' } };
	const data = JSON.stringify(userdata);

	try {
		const res = await axios.post("/api/auth/add_new_employee", data, config);
		dispatch(setAlertAction(res.data.msg, "success"));
		return dispatch({type: ADD_NEW_EMPLOYEE, payload: res.data.user });
	} catch(err) {
		dispatch(handleFormError(err.response.data));
		return setTimeout(() => dispatch(clearErrors()), 5000);
	};
};

export const getAllUsers = (type = "all") => async dispatch =>{
	try {
		const res = await axios.get(`/api/admin/users?usertype=${type}`);
		return dispatch({type: GET_ALL_USERS, payload: res.data });
	} catch(err) {
		dispatch(handleError(err.message));
		return setTimeout(() => dispatch(clearErrors()), 5000);
	};
};

export const getUserAccount = (id) => async dispatch =>{
	try {
		const res = await axios.get(`/api/admin/users/${id}`);
		return dispatch({type: ADMIN_SHOW_USER, payload: res.data});
	} catch(err) {
		dispatch(handleFormError(err.response.data));
		return setTimeout(() => dispatch(clearErrors()), 5000);
	};
};

export const getAllListings = () => async dispatch =>{
	try {
		const res = await axios.get("/api/admin/properties/");
		return dispatch({type: ADMIN_LOAD_LISTINGS, payload: res.data });
	} catch(err) {
		dispatch(handleError(err.message));
		return setTimeout(() => dispatch(clearErrors()), 5000);
	};
};

export const creatLisitngAction = (listingData) => async dispatch =>{
	const config = { headers: { 'Content-Type': 'application/json'} };
	const data = JSON.stringify(listingData);

	try {
		const res = await axios.post("/api/properties/", data, config);
		dispatch(setAlertAction("Property Lisitng Created...", "success"));
		dispatch({type: CREATE_NEW_LISTNG, payload: res.data});
		return history.push("/admin/properties");
	} catch(err) {
		dispatch(handleFormError(err.response.data));
		return setTimeout(() => dispatch(clearErrors()), 5000);
	};
};

export const updateListingAction = (id, listingData) => async dispatch =>{
	const config = { headers: { 'Content-Type': 'application/json'} };
	const data = JSON.stringify(listingData);
	
	try {
		const res = await axios.put(`/api/properties/${id}`, data, config);
		dispatch({type: UPDATE_LISTING, payload: res.data});
		return dispatch(setAlertAction("Listing update was successful...", "success"));
	} catch(err) {
		dispatch(handleFormError(err.response.data));
		return setTimeout(() => dispatch(clearErrors()), 5000);
	};
};

export const deleteListingAction = (id) => dispatch =>{
	try {
		const res = axios.delete(`/api/admin/properties/${id}`);
		return dispatch({type: DELETE_LISTING, payload: id });
	} catch(err) {
		dispatch(handleError(err.message));
		return setTimeout(() => dispatch(clearErrors()), 5000);
	};
};