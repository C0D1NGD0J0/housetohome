import { combineReducers } from "redux";
import AlertReducer from "./alert";
import ErrorsReducer from "./errors";
import AuthReducer from "./auth";

export default combineReducers({
	alert: AlertReducer,
	user: AuthReducer,
	errors: ErrorsReducer
});