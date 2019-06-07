import axios from "axios";
import { handleFormError, clearErrors } from "./utilAction";
import { setAlertAction } from "./alertAction";

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