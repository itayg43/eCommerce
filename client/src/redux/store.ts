import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import appReducer from '../redux/app/slice';
import productsReducer from '../redux/products/slice';
import productReducer from '../redux/product/slice';
import cartReducer from '../redux/cart/slice';

export const store = configureStore({
  reducer: {
    appState: appReducer,
    productsState: productsReducer,
    productState: productReducer,
    cartState: cartReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
