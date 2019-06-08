import { combineReducers } from "redux";
import AlertReducer from "./alert";
import ErrorsReducer from "./errors";
import AuthReducer from "./auth";
import UserReducer from "./user";

export default combineReducers({
	alert: AlertReducer,
	auth: AuthReducer,
	errors: ErrorsReducer,
	user: UserReducer
});