import { GET_LISTINGS, SEARCH_LISTINGS, GET_LISTING } from "../actions/types";
import _ from "lodash";

const initialState = {
	all: {},
	show: null,
	loading: true
};

export default function(state = initialState, action){
	const { type, payload } = action;

	switch(type){
		case GET_LISTINGS:
			return{
				...state,
				loading: false,
				all: {...state.all, ..._.mapKeys(payload, "_id")}
			};
		case GET_LISTING:
			return{
				...state,
				loading: false,
				show: payload
			}
		case SEARCH_LISTINGS:
			return{
				...state,
				loading: false,
				all: {..._.mapKeys(payload, "_id")}
			}
		default:
			return state;
	}
};