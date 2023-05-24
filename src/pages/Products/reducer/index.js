import { SET_PRODUCTS } from "../action";

const initialState = {
  data: [],
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        ...action.state,
      };

    default:
      return state;
  }
};

export default products;
