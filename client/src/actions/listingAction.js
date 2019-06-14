import axios from "axios";
import { handleFormError, clearErrors, handleError } from "./utilAction";
import { GET_ALL_LISTINGS, CREATE_NEW_LISTNG, UPDATE_LISTING, DELETE_LISTING, SHOW_LISTING } from "./types";
import { setAlertAction } from "./alertAction";

export const creatLisitngAction = (listingData, history) => async dispatch =>{
	const config = { headers: { 'Content-Type': 'application/json'} };
	const data = JSON.stringify(listingData);

	try {
		const res = await axios.post("/api/properties/", data, config);
		dispatch(setAlertAction("Property Lisitng Created...", "success"));
		return dispatch({type: CREATE_NEW_LISTNG, payload: res.data});
	} catch(err) {
		dispatch(handleFormError(err.response.data));
		return setTimeout(() => dispatch(clearErrors()), 5000);
	};
};