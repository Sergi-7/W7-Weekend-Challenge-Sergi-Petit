import { combineReducers } from "redux";
import usersListReducer from "./usersListReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  usersList: usersListReducer,
});

export default rootReducer;
