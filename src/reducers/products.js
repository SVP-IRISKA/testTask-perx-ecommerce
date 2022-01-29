import axios from "axios";

const initialState = {
  listProducts: [
  ],
};

const GET_PRODUCTS = "GET_PRODUCTS";

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return { ...state, listProducts: action.listProducts};
    }
    default:
      return state;
  }
};

export function getProducts() {
  return (dispatch) => {
    axios("https://murmuring-tor-81614.herokuapp.com/api/goods/").then(
      ({ data }) => {
        dispatch({ type: GET_PRODUCTS, listProducts: data })
      }
    ).catch(() => {
      dispatch({ type: GET_PRODUCTS, listProducts: [] })
    });
  };
}
