import {createSelector} from '@reduxjs/toolkit';

import {RootState} from '../store';

export const selectIsLoading = (state: RootState) =>
  state.productsState.isLoading;

export const selectIsError = (state: RootState) => state.productsState.isError;

export const selectErrorMessage = (state: RootState) =>
  state.productsState.errorMessage;

export const selectProducts = (state: RootState) =>
  state.productsState.products;

export const selectSearchQuery = (state: RootState) =>
  state.productsState.searchQuery;

export const selectFilteredProducts = createSelector(
  selectProducts,
  selectSearchQuery,
  (products, searchQuery) => {
    return products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  },
);
