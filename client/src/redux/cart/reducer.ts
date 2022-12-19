import {ICartState, ICartAction} from '../../interfaces';
import actionTypes from './actions/actionTypes';

const initialState: ICartState = {
  amountOfItems: 0,
  totalCost: 0,
  items: [],
};

const cartReducer = (state = initialState, {type, payload}: ICartAction) => {
  switch (type) {
    case actionTypes.ADD_ITEM_TO_CART: {
      const item = payload.item;
      return {
        ...state,
        items: [...state.items, item],
        amountOfItems: state.amountOfItems + 1,
        totalCost: state.totalCost + item.price,
      };
    }

    default: {
      return state;
    }
  }
};

export default cartReducer;
