import { SET_TOKEN, LOAD_CURRENTUSER, LOGOUT_CURRENTUSER, AUTH_ERROR } from "../actions/types";

const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: false,
	loading: true,
	info: null
};

export default function(state = initialState, action){
	const { type, payload } = action
	
	switch(type) {
		case LOAD_CURRENTUSER:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				info: payload
			};

		case SET_TOKEN:
			localStorage.setItem('token', payload.token);
			return {
				...state,
				isAuthenticated: true,
				loading: false
			};

		case LOGOUT_CURRENTUSER:
		case AUTH_ERROR:
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false
			};
		default: 
			return state;
	};
};