import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {Product} from '../../interfaces';

interface ProductState {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | null;
  product: Product | null;
}

const initialState: ProductState = {
  isLoading: false,
  isError: false,
  errorMessage: null,
  product: null,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // get product by id
    getProductByIdStarted: state => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = null;
    },
    getProductByIdSucceeded: (state, action: PayloadAction<Product>) => {
      state.isLoading = false;
      state.product = action.payload;
    },
    getProductByIdFailed: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
  },
});

export const {
  getProductByIdStarted,
  getProductByIdSucceeded,
  getProductByIdFailed,
} = productSlice.actions;

export default productSlice.reducer;
