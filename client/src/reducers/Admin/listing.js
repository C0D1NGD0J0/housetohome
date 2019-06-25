import { ADMIN_LOAD_LISTINGS, ADMIN_LOAD_LISTING, CREATE_NEW_LISTNG, UPDATE_LISTING, DELETE_LISTING } from "../../actions/types";
import _ from "lodash";

const initialState = {
	all: {},
	show: null,
	loading: true
};

export default function(state = initialState, action){
	const { type, payload } = action
	
	switch(type) {
		case ADMIN_LOAD_LISTINGS:
			return{
				...state,
				loading: false,
				all: {...state.all, ..._.mapKeys(payload, "_id")}
			};
		case ADMIN_LOAD_LISTING:
			return{
				...state,
				loading: false,
				show: payload
			};
		case CREATE_NEW_LISTNG:
		case UPDATE_LISTING:
			return{
				...state,
				loading: false,
				all: {...state.all, [payload.id]: payload}
			}
		case DELETE_LISTING:
			return{
				...state,
				loading: false,
				all: _.omit(state.all, payload)
			};
		default: 
			return state;
	};
};