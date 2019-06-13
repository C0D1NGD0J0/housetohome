import { LOAD_LISTINGS, CREATE_LISTING } from "../../actions/types";

const initialState = {
	all: [],
	show: null,
	loading: false
};

export default function(state = initialState, action){
	const { type, payload } = action
	
	switch(type) {
		
		default: 
			return state;
	};
};