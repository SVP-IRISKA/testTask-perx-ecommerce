const initialState = {
  listBasket: {},
};

const ADD_TO_BASKET = "ADD_TO_BASKET";
const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";
const DELETE_FROM_BASKET = "DELETE_FROM_BASKET";
const CLEAR_BASKET = "CLEAR_BASKET";

const changesBasket = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET: {
      return {
        ...state,
        listBasket: {
          ...state.listBasket,
          [action.name]: (state.listBasket[action.name] || 0) + 1,
        },
      };
    }

    case REMOVE_FROM_BASKET: {
      const delProduct = {
        ...state.listBasket,
        [action.name]: Math.max(0, (state.listBasket[action.name] || 0) - 1),
      };
      if (delProduct[action.name] <= 0) {
        delete delProduct[action.name];
      }
      return {
        ...state,
        listBasket: delProduct,
      };
    }

    case DELETE_FROM_BASKET: {
      const deleteProductBasket = {
        ...state.listBasket,
      };
      delete deleteProductBasket[action.name];
      return {
        ...state,
        listBasket: deleteProductBasket,
      };
    }

    case CLEAR_BASKET: {
      return {
        ...state,
        listBasket: {},
      };
    }

    default:
      return state;
  }
};

export function addToBasket(name) {
  return { type: ADD_TO_BASKET, name };
}

export function deleteFromBasket(name) {
  return { type: REMOVE_FROM_BASKET, name };
}

export function deleteFromProductBasket(name) {
  return { type: DELETE_FROM_BASKET, name };
}

export function clearProductsBasket() {
  return { type: CLEAR_BASKET };
}

export default changesBasket;
