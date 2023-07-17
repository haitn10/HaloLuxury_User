import axios from "axios";
import { baseURL } from "../../../api";

export const GET_NUMBER_PRODUCT = "GET_NUMBER_CART";
export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";
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
export const RemoveCart = (state) => {
  return {
    type: "REMOVE_CART",
    state,
  };
};
export const DeleteCart = (state) => {
  return {
    type: "DELETE_CART",
    state,
  };
};

export const checkOut = () => async (dispatch, getState) => {
  const cart = getState().carts.products;
  const profile = getState().auth.profile;
  const date = new Date();
  console.log(profile);

  const order = {
    customerId: profile.id,
    addressId: profile.addresses.length > 0 ? profile.addresses[0].id : 1,
    orderTime: date.toISOString(),
    orderItems: cart.map((product) => {
      let listProductsId = {};
      listProductsId.productId = product.id;
      return listProductsId;
    }),
  };

  try {
    const data = await axios.post(`${baseURL}/orders`, order);
    sessionStorage.removeItem("cart");
    dispatch(RemoveCart());
    return Promise.resolve(data.data);
  } catch (e) {
    console.log(e);
    const status = e.response.statusText ? e.response.statusText : e.message;
    return Promise.reject(status);
  }
};
