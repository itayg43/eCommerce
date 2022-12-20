import {Dispatch} from 'redux';

import actionTypes from './actionTypes';
import {IProduct, ICartAction} from '../../../interfaces';
import {CartItemEntity} from '../../../entities/CartItem';

const addItemToCartAction = (item: CartItemEntity): ICartAction => ({
  type: actionTypes.ADD_ITEM_TO_CART,
  payload: {
    item,
  },
});

export const addItemToCart =
  (product: IProduct) => async (dispatch: Dispatch, getState: any) => {
    const currentItems = getState().cartState.items;

    // check if item already exist
    const existItem = currentItems.find(
      (item: CartItemEntity) => item._id === product._id,
    );
    if (existItem) {
      // dispatch -> update quantity
      return;
    }

    const newItem = new CartItemEntity(product);
    dispatch(addItemToCartAction(newItem));
  };
