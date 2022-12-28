import {removeItem} from '../slice';
import {AppDispatch} from '../../store';
import {CartItem} from '../../../utils/entities';

export const removeItemFromCart =
  (item: CartItem) => async (dispatch: AppDispatch) => {
    dispatch(removeItem(item));
  };
