import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {CartItem} from '../../interfaces';

interface CartState {
  amountOfItems: number;
  totalCost: number;
  items: [CartItem] | [];
}

const initialState: CartState = {
  amountOfItems: 0,
  totalCost: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // add item
    addItem: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      state.amountOfItems += item.quantity;
      state.totalCost += item.price * item.quantity;
      state.items.push(item);
    },

    // remove item
    removeItem: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      state.amountOfItems -= item.quantity;
      state.totalCost -= item.price * item.quantity;
      state.items = state.items.filter(i => i._id !== item._id);
    },
  },
});

export const {addItem, removeItem} = cartSlice.actions;

export default cartSlice.reducer;
