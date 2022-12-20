import {
  getProductByIdStarted,
  getProductByIdSucceeded,
  getProductByIdFailed,
} from '../slice';
import {AppDispatch} from '../../store';
import {sanityClient} from '../../../clients';
import {getProductByIdQuery} from '../../../queries';

export const getProductById = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(getProductByIdStarted());
    const product = await sanityClient.fetch(getProductByIdQuery, {id});
    dispatch(getProductByIdSucceeded(product));
  } catch (error) {
    console.error(error);
    const errorMessage = 'An error occurred while trying to get product';
    dispatch(getProductByIdFailed(errorMessage));
  }
};
