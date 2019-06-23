import axios from "axios";
import { handleFormError, clearErrors, handleError } from "./utilAction";
import { GET_LISTING, GET_LISTINGS, ADMIN_LOAD_LISTING } from "./types";
import { setAlertAction } from "./alertAction";

export const getListingsAction = () => async dispatch =>{
	try {
		const res = await axios.get("/api/properties");
		return dispatch({type: GET_LISTINGS, payload: res.data });
	} catch(err) {
		dispatch(handleError(err.message));
		return setTimeout(() => dispatch(clearErrors()), 5000);
	};
};

export const getListingAction = (id, isadmin = false) => async dispatch =>{
	try {
		const res = await axios.get(`/api/properties/${id}`);
		if(isadmin) return dispatch({type: ADMIN_LOAD_LISTING, payload: res.data});
		return dispatch({type: GET_LISTING, payload: res.data});
	} catch(err) {
		console.log(err);
	};
};
