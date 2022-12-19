import {IStoreState} from '../../store';

// loading
export const selectIsLoading = (state: IStoreState) =>
  state.productsState.isLoading;

// error
export const selectIsError = (state: IStoreState) =>
  state.productsState.isError;
export const selectErrorMessage = (state: IStoreState) =>
  state.productsState.errorMessage;

// products
export const selectProducts = (state: IStoreState) =>
  state.productsState.products;
