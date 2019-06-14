import { combineReducers } from "redux";
import AlertReducer from "./alert";
import ErrorsReducer from "./errors";
import AuthReducer from "./auth";
import AdminReducer from "./Admin/";
import LisitngReducer from "./listing";

export default combineReducers({
	alert: AlertReducer,
	user: AuthReducer,
	admin: AdminReducer,
	errors: ErrorsReducer,
	listings: LisitngReducer
});