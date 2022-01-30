import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import createRootReducer from "./redux/reducers";

const persistConfig = {
  key: "root",
  storage: storage,
};

const middleware = [thunk];
const initialState = {};

const persistedReducer = persistReducer(persistConfig, createRootReducer());

const composeFunc =
  process.env.NODE_ENV === "development" ? composeWithDevTools : compose;
const composedEnchanters = composeFunc(applyMiddleware(...middleware));
const store = createStore(persistedReducer, initialState, composedEnchanters);

export const persistor = persistStore(store);

export default store;
