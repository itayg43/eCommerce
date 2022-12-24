import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {CartItem} from '../../utils/interfaces';

interface CartState {
  items: CartItem[] | [];
  itemsCount: number;
  itemsCost: number;
}

const initialState: CartState = {
  items: [],
  itemsCount: 0,
  itemsCost: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // add item
    addItem: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      state.items = [...state.items, item];
      state.itemsCount += 1;
      state.itemsCost += item.totalCost;
    },

    // remove item
    removeItem: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      state.items = state.items.filter(i => i._id !== item._id);
      state.itemsCount -= 1;
      state.itemsCost -= item.totalCost;
    },
  },
});

export const {addItem, removeItem} = cartSlice.actions;

export default cartSlice.reducer;
