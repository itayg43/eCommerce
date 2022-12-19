import {IStoreState} from '../../store';

// loading
export const selectIsLoading = (state: IStoreState) =>
  state.productState.isLoading;

// error
export const selectIsError = (state: IStoreState) => state.productState.isError;
export const selectErrorMessage = (state: IStoreState) =>
  state.productState.errorMessage;

// products
export const selectProduct = (state: IStoreState) => state.productState.product;
