import axios from "axios";
import { handleFormError, clearErrors, handleError } from "./utilAction";
import { ADD_NEW_EMPLOYEE } from "./types";
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
		dispatch({type: ADD_NEW_EMPLOYEE, payload: res.data.user });
		return history.push("/admin/manage_users");
	} catch(err) {
		dispatch(handleFormError(err.response.data));
		return setTimeout(() => dispatch(clearErrors()), 5000);
	};
};