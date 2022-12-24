import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {Product} from '../../utils/interfaces';
import {STATUS} from '../../utils/enums';

interface ProductState {
  status: STATUS;
  errorMessage: string | null;
  product: Product | null;
}

const initialState: ProductState = {
  status: STATUS.IDLE,
  errorMessage: null,
  product: null,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // get product by id
    getProductByIdStarted: state => {
      state.status = STATUS.LOADING;
      state.errorMessage = null;
    },
    getProductByIdSucceeded: (state, action: PayloadAction<Product>) => {
      state.status = STATUS.IDLE;
      state.product = action.payload;
    },
    getProductByIdFailed: (state, action: PayloadAction<string>) => {
      state.status = STATUS.ERROR;
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
