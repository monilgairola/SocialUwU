import { combineReducers } from "redux";
import { user } from "./users";
import { profile } from "./profile";

export default combineReducers({
  user,
  profile,
});
