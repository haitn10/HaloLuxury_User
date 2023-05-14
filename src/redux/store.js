import { combineReducers, createStore } from "redux";

import authReducer from "../pages/Login/reducer";

const store = createStore(combineReducers([authReducer]));

export default store;
