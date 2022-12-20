import {RootState} from '../store';

export const selectIsLoading = (state: RootState) =>
  state.productState.isLoading;

export const selectIsError = (state: RootState) => state.productState.isError;

export const selectErrorMessage = (state: RootState) =>
  state.productState.errorMessage;

export const selectProduct = (state: RootState) => state.productState.product;
