import { HANDLE_FORM_ERROR, CLEAR_ERROR } from "./types";

export const handleFormError = (data) =>{
	return{
		type: HANDLE_FORM_ERROR,
		payload: data
	};
};

export const clearErrors = () =>{
	return {
		type: CLEAR_ERROR,
		payload: {}
	};
};