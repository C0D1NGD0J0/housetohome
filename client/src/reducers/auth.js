import { SET_TOKEN, LOAD_CURRENTUSER, LOGOUT_CURRENTUSER, AUTH_ERROR, UPDATE_CURRENTUSER, DELETE_ACCOUNT } from "../actions/types";
import _ from "lodash";

const initialState = {
	isAuthenticated: false,
	loading: true,
	info: null,
	properties: {}
};

export default function(state = initialState, action){
	const { type, payload } = action
	
	switch(type) {
		case LOAD_CURRENTUSER:
			return {
				...state,
				loading: false,
				isAuthenticated: true,
				info: {...payload.info}
			};

		case SET_TOKEN:
			localStorage.setItem('token', payload.token);
			return {
				...state,
				isAuthenticated: true,
				loading: false
			};

		case UPDATE_CURRENTUSER:
			return {
				...state,
				loading: false,
				info: {...payload}
			};

		case LOGOUT_CURRENTUSER:
		case AUTH_ERROR:
		case DELETE_ACCOUNT:
			localStorage.removeItem('token');
			return {
				...state,
				info: null,
				loading: false,
				isAuthenticated: false
			};
		default: 
			return state;
	};
};


// properties: {...state.properties, ..._.mapKeys(payload.properties, "_id")}