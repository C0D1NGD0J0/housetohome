import { HANDLE_FORM_ERRORS, CLEAR_ERROR, HANDLE_ERRORS, AUTH_ERROR } from "./types";

export const handleFormError = (data) =>{
	return{
		type: HANDLE_FORM_ERRORS,
		payload: data
	};
};

export const handleError = (data) =>{
	return{
		type: HANDLE_ERRORS,
		payload: data
	};
};

export const clearErrors = () =>{
	return {
		type: CLEAR_ERROR,
		payload: {}
	};
};

export const clearAuthErrors = () =>{
	return {
		type: AUTH_ERROR,
		payload: {}
	}
}