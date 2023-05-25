export const GET_NUMBER_PRODUCT = "GET_NUMBER_CART";
export const ADD_CART = "ADD_CART";
export const UPDATE_CART = "UPDATE_CART";
export const DELETE_CART = "DELETE_CART";

/*GET NUMBER CART*/
export const GetNumberCart = () => {
  return {
    type: "GET_NUMBER_PRODUCT",
  };
};

export const AddCart = (state) => {
  return {
    type: "ADD_CART",
    state,
  };
};
export const UpdateCart = (state) => {
  return {
    type: "UPDATE_CART",
    state,
  };
};
export const DeleteCart = (state) => {
  return {
    type: "DELETE_CART",
    state,
  };
};
