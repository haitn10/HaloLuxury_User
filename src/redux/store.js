import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import auth from "../pages/Login/reducer";
import products from "../pages/Products/reducer";
import carts from "../pages/Cart/reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ auth, products, carts }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
