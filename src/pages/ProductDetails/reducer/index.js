import { SET_PRODUCT_DETAILS } from "../action";

const productDetails = (state = {}, action) => {
  switch (action.type) {
    case SET_PRODUCT_DETAILS:
      return {
        ...state,
        ...action.state,
      };

    default:
      return state;
  }
};

export default productDetails;
