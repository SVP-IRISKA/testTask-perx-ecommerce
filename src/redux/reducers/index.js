import { combineReducers } from "redux";
import products from "./products";
import basket from "./basket";

const createRootReducer = () =>
  combineReducers({
    products,
    basket,
  });

export default createRootReducer;
