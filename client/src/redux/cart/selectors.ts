import {RootState} from '../store';

export const selectItems = (state: RootState) => state.cartState.items;

// count
export const selectItemsCount = (state: RootState) =>
  state.cartState.itemsCount;

// cost
export const selectItemsCost = (state: RootState) => state.cartState.itemsCost;
