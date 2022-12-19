import {Dispatch} from 'redux';

import actionTypes from './actionTypes';
import {IProduct, IProductAction} from '../../../interfaces';
import {sanityClient} from '../../../clients';
import {getProductByIdQuery} from '../../../queries';

const getProductByIdAction = (): IProductAction => ({
  type: actionTypes.GET_PRODUCT_BY_ID,
  payload: {},
});

const getProductByIdActionSuccess = (product: IProduct): IProductAction => ({
  type: actionTypes.GET_PRODUCT_BY_ID_SUCCESS,
  payload: {
    product,
  },
});

const getProductByIdActionFail = (errorMessage: string): IProductAction => ({
  type: actionTypes.GET_PRODUCT_BY_ID_FAIL,
  payload: {
    errorMessage,
  },
});

export const getProductById = (id: string) => async (dispatch: Dispatch) => {
  dispatch(getProductByIdAction());
  try {
    const product = await sanityClient.fetch(getProductByIdQuery, {id});
    dispatch(getProductByIdActionSuccess(product));
  } catch (error) {
    console.error(error);
    const errorMessage = 'An error occurred while getting product';
    dispatch(getProductByIdActionFail(errorMessage));
  }
};
