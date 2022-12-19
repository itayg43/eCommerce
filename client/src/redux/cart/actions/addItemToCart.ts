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
  (product: IProduct) => async (dispatch: Dispatch) => {
    const item = new CartItemEntity(product);
    dispatch(addItemToCartAction(item));
  };
