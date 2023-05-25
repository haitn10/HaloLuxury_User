import { ADD_CART, DELETE_CART, GET_NUMBER_PRODUCT } from "../action";

const initialState = {
  numberProduct: 0,
  products: [],
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
        state.products.map((item, key) => {
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
      };

    case DELETE_CART:
      const indexOfObject = state.products.findIndex((object) => {
        return object.id === action.state;
      });
      console.log(state.products.splice(2, 1));

      return {
        ...state,
        // products: state.products.splice(indexOfObject, 1),
        // numberProduct: state.numberProduct - 1,
      };

    default:
      return state;
  }
}

export default carts;
