import {addItem} from '../slice';
import {AppDispatch} from '../../store';
import {Product, CartItem} from '../../../utils/interfaces';

export const addItemToCart =
  (product: Product, quantity: number) =>
  async (dispatch: AppDispatch, getState: any) => {
    const currentItems = getState().cartState.items;

    // check if already exist
    const isExist = currentItems.some(
      (item: CartItem) => item._id === product._id,
    );
    if (isExist) {
      return;
    }

    const item: CartItem = {
      _id: product._id,
      name: product.name,
      price: product.price,
      quantity,
      totalCost: product.price * quantity,
      imageUrl: product.imageUrl,
    };
    dispatch(addItem(item));
  };
