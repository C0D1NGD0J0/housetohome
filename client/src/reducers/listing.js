import { GET_ALL_LISTINGS, CREATE_NEW_LISTNG, UPDATE_LISTING, DELETE_LISTING, SHOW_LISTING } from "../actions/types";

const initialState = {
	all: [],
	show: null,
	loading: true
};

export default function(state = initialState, action){
	const { type, payload } = action;

	switch(type){
		case CREATE_NEW_LISTNG:
			return{
				...state,
				all: [...state.all, payload],
				loading: false
			}	
		default:
			return state;
	}
};