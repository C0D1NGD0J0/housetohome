const initialState = {
	info: null,
	listings: [],
	loading: true,
	errors: {}
};

export default function(state = initialState, action){
	const { type, payload } = action;

	switch (type) {
		
		default:
			return state;
	};
};