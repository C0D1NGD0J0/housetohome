import { ADMIN_LOAD_LISTINGS, CREATE_NEW_LISTNG } from "../../actions/types";
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
		case CREATE_NEW_LISTNG:
			return{
				...state,
				loading: false,
				all: {...state.all, [payload.id]: payload}
			}
		default: 
			return state;
	};
};