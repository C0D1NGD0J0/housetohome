import axios from "axios";
import { handleFormError, clearErrors, handleError } from "./utilAction";
import { ADD_NEW_EMPLOYEE, GET_ALL_USERS } from "./types";
import { setAlertAction } from "./alertAction";

export const registerEmployeeAction = (userdata, history) => async dispatch =>{
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

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

export const getAllUsers = () => async dispatch =>{
	try {
		const res = await axios.get("/api/admin/users");
		return dispatch({type: GET_ALL_USERS, payload: res.data });
	} catch(err) {
		dispatch(handleError(err.message));
		return setTimeout(() => dispatch(clearErrors()), 5000);
	};
};