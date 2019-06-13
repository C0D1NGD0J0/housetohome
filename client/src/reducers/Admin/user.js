import { GET_ALL_USERS, GET_EMPLOYEES, GET_GUESTS, ADD_NEW_EMPLOYEE, ADMIN_SHOW_USER, ADMIN_UPDATE_USER, } from "../../actions/types";

const initialState = {
	all: [],
	employees: [],
	guests: [],
	show: null,
	loading: true
};

export default function(state = initialState, action){
	const { type, payload } = action
	
	switch(type) {
		case ADD_NEW_EMPLOYEE:
			return{
				...state,
				loading: false,
				employees: [...state.employees, payload.data]
			};
		default: 
			return state;
	};
};