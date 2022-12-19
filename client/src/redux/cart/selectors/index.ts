import {IStoreState} from '../../store';

// amount of items
export const selectAmountOfItems = (state: IStoreState) =>
  state.cartState.amountOfItems;

// total cost
export const selectTotalCost = (state: IStoreState) =>
  state.cartState.totalCost;

// items
export const selectItems = (state: IStoreState) => state.cartState.items;
