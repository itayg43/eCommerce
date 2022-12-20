import {
  getAllProductsStarted,
  getAllProductsSucceeded,
  getAllProductsFailed,
} from '../slice';
import {AppDispatch} from '../../store';
import {sanityClient} from '../../../clients';
import {getAllProductsQuery} from '../../../queries';

export const getAllProducts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(getAllProductsStarted());
    const products = await sanityClient.fetch(getAllProductsQuery);
    dispatch(getAllProductsSucceeded(products));
  } catch (error) {
    console.error(error);
    const errorMessage = 'An error occurred while trying to get all products';
    dispatch(getAllProductsFailed(errorMessage));
  }
};
