import { combineReducers } from "redux";
import AlertReducer from "./alert";

export default combineReducers({
	alert: AlertReducer
});