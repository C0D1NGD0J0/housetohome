import { CLEAR_ERROR, HANDLE_FORM_ERROR } from "../actions/types";

const initialState = {};

export default function(state = initialState, action){
	const { type, payload } = action;

	switch(type){
		case HANDLE_FORM_ERROR: 
			return payload;
		case CLEAR_ERROR:
			return payload;
		default:
			return state;
	}
};