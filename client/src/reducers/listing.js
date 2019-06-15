import { GET_LISTINGS, GET_LISTING } from "../actions/types";

const initialState = {
	all: {},
	show: null,
	loading: true
};

export default function(state = initialState, action){
	const { type, payload } = action;

	switch(type){
		case GET_LISTING:
			return{
				...state,
				loading: false,
				show: payload
			}
		default:
			return state;
	}
};