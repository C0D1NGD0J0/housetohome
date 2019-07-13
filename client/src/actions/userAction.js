import { UPDATE_CURRENTUSER, DELETE_ACCOUNT } from "./types";
import axios from "axios";
import { handleFormError, clearErrors } from "./utilAction";
import { setAlertAction } from "./alertAction";

export const updateUserAction = (userdata) => async dispatch =>{
	const config = { headers: { 'Content-Type': 'application/json' } };

	const data = JSON.stringify(userdata);
	try {
		const res = await axios.put("/api/users/currentuser", data, config);
		dispatch({type: UPDATE_CURRENTUSER, payload: res.data });
		return dispatch(setAlertAction("Update was Succcessful", 'success'));
	} catch(err) {
		dispatch(handleFormError(err.response.data));
		return setTimeout(() => dispatch(clearErrors()), 5000);
	};
};

export const deleteAccountAction = (id) => async dispatch =>{
	try {
		const res = await axios.delete(`/api/users/${id}`);
		dispatch({type: DELETE_ACCOUNT, payload: {} });
		return dispatch(setAlertAction(res.data.msg, 'success'));
	} catch(err) {
		return dispatch(setAlertAction(err.response.data.msg, 'danger'));
	};
};