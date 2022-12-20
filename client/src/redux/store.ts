import {configureStore} from '@reduxjs/toolkit';

import appReducer from '../redux/app/slice';
import productsReducer from '../redux/products/slice';
import productReducer from '../redux/product/slice';

export const store = configureStore({
  reducer: {
    appState: appReducer,
    productsState: productsReducer,
    productState: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
