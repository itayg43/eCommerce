import {RootState} from '../store';

export const selectAmountOfItems = (state: RootState) =>
  state.cartState.amountOfItems;

export const selectTotalCost = (state: RootState) => state.cartState.totalCost;

export const selectItems = (state: RootState) => state.cartState.items;
