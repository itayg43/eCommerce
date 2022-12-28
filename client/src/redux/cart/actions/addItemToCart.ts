import {addItem} from '../slice';
import {AppDispatch} from '../../store';
import {Product} from '../../../utils/interfaces';
import {CartItem} from '../../../utils/entities';

export const addItemToCart =
  (product: Product, quantity: number) =>
  async (dispatch: AppDispatch, getState: any) => {
    const currentItems = getState().cartState.items;

    // check if already exist
    const isExist = currentItems.some(
      (item: CartItem) => item.pId === product.id,
    );
    if (isExist) {
      return;
    }

    const item = new CartItem(product, quantity);
    dispatch(addItem(item));
  };
