import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {Product} from '../../utils/interfaces';
import {STATUS} from '../../utils/enums';

interface ProductsState {
  status: STATUS;
  errorMessage: string | null;
  products: Product[] | [];
  searchQuery: string;
}

const initialState: ProductsState = {
  status: STATUS.IDLE,
  errorMessage: null,
  products: [],
  searchQuery: '',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // get all products
    getAllProductsStarted: state => {
      state.status = STATUS.LOADING;
      state.errorMessage = null;
    },
    getAllProductsSucceeded: (state, action: PayloadAction<Product[]>) => {
      state.status = STATUS.IDLE;
      state.products = action.payload;
    },
    getAllProductsFailed: (state, action: PayloadAction<string>) => {
      state.status = STATUS.ERROR;
      state.errorMessage = action.payload;
    },

    // update search query
    updateSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const {
  getAllProductsStarted,
  getAllProductsSucceeded,
  getAllProductsFailed,
  updateSearchQuery,
} = productsSlice.actions;

export default productsSlice.reducer;
