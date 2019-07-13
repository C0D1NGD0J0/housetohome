import { combineReducers } from "redux";
import ListingReducer from "./listing";
import UsersReducer from "./user";

export default combineReducers({
	listings: ListingReducer,
	users: UsersReducer
});