import { GET_ALL_USERS, ADD_NEW_EMPLOYEE, ADMIN_SHOW_USER, ADMIN_UPDATE_USER, } from "../../actions/types";
import _ from "lodash";

const initialState = {
	all: {},
	show: null,
	loading: true
};

export default function(state = initialState, action){
	const { type, payload } = action
	
	switch(type) {
		case GET_ALL_USERS:
			return{
				...state,
				all: {..._.mapKeys(payload, "id")},
				loading: false
			};
		case ADD_NEW_EMPLOYEE:
			return{
				...state,
				loading: false,
				all: {...state.all, [payload.data.id]: payload.data}
			};
		case ADMIN_SHOW_USER:
			return{
				...state,
				loading: false,
				show: {...payload}
			};
		default: 
			return state;
	};
};