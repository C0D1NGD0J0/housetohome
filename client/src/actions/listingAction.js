import axios from "axios";
import history from "../helpers/history";
import { handleFormError, clearErrors, handleError } from "./utilAction";
import { GET_LISTING, GET_LISTINGS, ADMIN_LOAD_LISTING } from "./types";

export const getListingsAction = () => async dispatch =>{
	try {
		const res = await axios.get("/api/properties/all");
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
		dispatch(handleError(err.message));
		return setTimeout(() => dispatch(clearErrors()), 3000);
	};
};

export const searchListingsAction = (searchVal, originPath) => async dispatch =>{
	try {
		const res = await axios.get(`/api/properties/all?country=${searchVal}`);
		dispatch({type: GET_LISTINGS, payload: res.data });
		if(originPath === '/'){
			return history.push(`/properties?country=${searchVal}`);
		};
	} catch(err) {
		dispatch(handleFormError(err.response.data));
		return setTimeout(() => dispatch(clearErrors()), 5000);
	};
};

export const getSearchResultAction = (value) => dispatch =>{
	return searchListingsAction(value);
};