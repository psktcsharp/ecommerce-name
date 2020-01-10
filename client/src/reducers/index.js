import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import alert from "./alert";
import auth from "./auth";
import cart from "./cart";
import directoryReducer from "./directory";

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart']
};

const rootReducer = combineReducers({
  alert,
  auth,
  cart,
  directory: directoryReducer
});

export default persistReducer(persistConfig, rootReducer)
