import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //get window localstorage

import cartReducer from "./cart/cart-reducer";
import shopReducer from "./shop/shop-reducer.js";

const persistConfig = {
  key: "root",
  storage,
  whiteList: [],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
