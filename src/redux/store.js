import { combineReducers, createStore } from "redux";

import authReducer from "../components/login/reducer";

const store = createStore(combineReducers([authReducer]));

export default store;
