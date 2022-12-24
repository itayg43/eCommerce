import {RootState} from '../store';

export const selectStatus = (state: RootState) => state.productState.status;

export const selectErrorMessage = (state: RootState) =>
  state.productState.errorMessage;

export const selectProduct = (state: RootState) => state.productState.product;
