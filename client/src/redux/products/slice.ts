import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {Product} from '../../interfaces';

interface ProductsState {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | null;
  products: [Product] | [];
}

const initialState: ProductsState = {
  isLoading: false,
  isError: false,
  errorMessage: null,
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // get all products
    getAllProductsStarted: state => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = null;
    },
    getAllProductsSucceeded: (state, action: PayloadAction<[Product]>) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    getAllProductsFailed: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
  },
});

export const {
  getAllProductsStarted,
  getAllProductsSucceeded,
  getAllProductsFailed,
} = productsSlice.actions;

export default productsSlice.reducer;
