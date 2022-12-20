import {Dispatch} from 'redux';

import actionTypes from './actionTypes';
import {ICartAction} from '../../../interfaces';
import {CartItemEntity} from '../../../entities/CartItem';

const removeItemFromCartAction = (item: CartItemEntity): ICartAction => ({
  type: actionTypes.REMOVE_ITEM_FROM_CART,
  payload: {
    item,
  },
});

export const removeItemFromCart =
  (item: CartItemEntity) => async (dispatch: Dispatch) => {
    dispatch(removeItemFromCartAction(item));
  };
