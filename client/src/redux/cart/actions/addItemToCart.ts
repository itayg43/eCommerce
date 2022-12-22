import {addItem} from '../slice';
import {AppDispatch} from '../../store';
import {CartItem, Product} from '../../../interfaces';

export const addItemToCart =
  (product: Product, quantity: number) =>
  async (dispatch: AppDispatch, getState: any) => {
    const currentItems = getState().cartState.items;

    // check if exist
    const itemIndex = currentItems.findIndex(
      (item: CartItem) => item._id === product._id,
    );
    if (itemIndex !== -1) {
      return;
    }

    const item: CartItem = {
      _id: product._id,
      name: product.name,
      price: product.price,
      quantity,
      imageUrl: product.imageUrl,
    };
    dispatch(addItem(item));
  };
