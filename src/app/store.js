import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import productInfoReducer from "../features/productInfoSlice";
import languageReducer from "../features/languageSliceSelected";
import newUser from "../features/userSlice";
import cartReducer from "../features/cartSlices";
import serversReducer from "../features/serverList";
import productsReducer from "../features/productSlices";
import orderReducer from "../features/ordersSlice";
import currencyReducer from "../features/currencyExchange";
import cookReducer from "../features/cookieSlices";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducers = combineReducers({
  user: newUser,
  cart: cartReducer,
  servers: serversReducer,
  language: languageReducer,
  productsinfo: productInfoReducer,
  products: productsReducer,
  orders: orderReducer,
  currency: currencyReducer,
  cook: cookReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools: process.env.NODE_ENV !== "production",
});

export let persistor = persistStore(store);
