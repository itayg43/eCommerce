import {IProductsState, IProductsAction} from '../../interfaces';
import actionTypes from './actions/actionTypes';

const initialState: IProductsState = {
  isLoading: false,
  isError: false,
  errorMessage: null,
  products: [],
};

const productsReducer = (
  state = initialState,
  {type, payload}: IProductsAction,
) => {
  switch (type) {
    // request
    case actionTypes.GET_ALL_PRODUCTS: {
      return {
        ...state,
        isLoading: true,
      };
    }

    // success
    case actionTypes.GET_ALL_PRODUCTS_SUCCESS: {
      const products = payload.products;
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: null,
        products,
      };
    }

    // fail
    case actionTypes.GET_ALL_PRODUCTS_FAIL: {
      const errorMessage = payload.errorMessage;
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage,
      };
    }

    default: {
      return state;
    }
  }
};

export default productsReducer;
