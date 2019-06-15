import { combineReducers } from "redux";
import ListingReducer from "./listing";
import UsersReducer from "./user";
import ErrorsReducer from "../errors";

export default combineReducers({
	listings: ListingReducer,
	users: UsersReducer
});