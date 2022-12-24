import {createSelector} from '@reduxjs/toolkit';

import {RootState} from '../store';

export const selectStatus = (state: RootState) => state.productsState.status;

export const selectErrorMessage = (state: RootState) =>
  state.productsState.errorMessage;

// products
export const selectProducts = (state: RootState) =>
  state.productsState.products;

// search query
export const selectSearchQuery = (state: RootState) =>
  state.productsState.searchQuery;

// filtered products
export const selectFilteredProducts = createSelector(
  selectProducts,
  selectSearchQuery,
  (products, searchQuery) => {
    return products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  },
);
