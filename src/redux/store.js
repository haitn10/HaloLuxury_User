import { combineReducers, createStore } from "redux";

import authReducer from "../pages/Login/reducer";
import products from "../pages/Products/reducer";
import carts from "../pages/Cart/reducer";

const store = createStore(combineReducers({ authReducer, products, carts }));

export default store;
