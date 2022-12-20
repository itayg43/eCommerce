import {RootState} from '../store';

export const selectIsLoading = (state: RootState) =>
  state.productsState.isLoading;

export const selectIsError = (state: RootState) => state.productsState.isError;

export const selectErrorMessage = (state: RootState) =>
  state.productsState.errorMessage;

export const selectProducts = (state: RootState) =>
  state.productsState.products;
