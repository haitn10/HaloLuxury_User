import { ADD_CART, DELETE_CART, GET_NUMBER_PRODUCT, REMOVE_CART } from "../action";

const initialState = {
  numberProduct: sessionStorage.getItem("cart")
    ? JSON.parse(sessionStorage.getItem("cart")).length
    : 0,
  products: sessionStorage.getItem("cart")
    ? JSON.parse(sessionStorage.getItem("cart"))
    : [],
};

function carts(state = initialState, action) {
  switch (action.type) {
    case GET_NUMBER_PRODUCT:
      return {
        ...state,
      };
    case ADD_CART:
      if (state.numberProduct === 0) {
        let product = {
          id: action.state.id,
          quantity: 1,
          name: action.state.name,
          image: action.state.image,
          price: action.state.price,
        };
        state.products.push(product);
      } else {
        let check = false;
        state.products.map((item) => {
          if (item.id === action.state.id) {
            check = true;
          }
        });
        if (!check) {
          let _product = {
            id: action.state.id,
            quantity: 1,
            name: action.state.name,
            image: action.state.image,
            price: action.state.price,
          };
          state.products.push(_product);
        }
      }

      return {
        ...state,
        numberProduct: state.numberProduct + 1,
        sessionStorage: sessionStorage.setItem(
          "cart",
          JSON.stringify(state.products)
        ),
      };

    case DELETE_CART:
      if (state.products.length === 1) {
        return {
          ...state,
          products: [],
          numberProduct: 0,
          sessionStorage: sessionStorage.removeItem("cart"),
        };
      } else {
        return {
          ...state,
          products: state.products.filter(
            (product) => product.id !== action.state
          ),
          numberProduct: state.numberProduct - 1,
          sessionStorage: sessionStorage.setItem(
            "cart",
            JSON.stringify(state.products)
          ),
        };
      }

    case REMOVE_CART:
      return {
        ...state,
        numberProduct: 0,
        products: [],
      };

    default:
      return state;
  }
}

export default carts;
