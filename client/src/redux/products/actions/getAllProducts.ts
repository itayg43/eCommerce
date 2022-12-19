import {Dispatch} from 'redux';

import actionTypes from './actionTypes';
import {IProduct, IProductsAction} from '../../../interfaces';
import {sanityClient} from '../../../clients';
import {getAllProductsQuery} from '../../../queries';

const getAllProductsAction = (): IProductsAction => ({
  type: actionTypes.GET_ALL_PRODUCTS,
  payload: {},
});

const getAllProductsActionSuccess = (
  products: [IProduct],
): IProductsAction => ({
  type: actionTypes.GET_ALL_PRODUCTS_SUCCESS,
  payload: {
    products,
  },
});

const getAllProductsActionFail = (errorMessage: string): IProductsAction => ({
  type: actionTypes.GET_ALL_PRODUCTS_FAIL,
  payload: {
    errorMessage,
  },
});

export const getAllProducts = () => async (dispatch: Dispatch) => {
  dispatch(getAllProductsAction());
  try {
    const products = await sanityClient.fetch(getAllProductsQuery);
    dispatch(getAllProductsActionSuccess(products));
  } catch (error) {
    console.error(error);
    const errorMessage = 'An error occurred while getting all products';
    dispatch(getAllProductsActionFail(errorMessage));
  }
};
