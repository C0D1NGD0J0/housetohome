import { CLEAR_ERROR, HANDLE_FORM_ERRORS, HANDLE_ERRORS } from "../actions/types";

const initialState = {};

export default function(state = initialState, action){
	const { type, payload } = action;

	switch(type){
		case HANDLE_FORM_ERRORS: 
		case HANDLE_ERRORS:
		case CLEAR_ERROR:
			return payload;		
		default:
			return state;
	}
};