import { combineReducers } from 'redux';

import userReducer from "./user/user.reducer";

// create root reducer
export default combineReducers({
  user: userReducer
});