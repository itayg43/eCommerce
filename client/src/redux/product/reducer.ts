import {IProductState, IProductAction} from '../../interfaces';
import actionTypes from './actions/actionTypes';

const initialState: IProductState = {
  isLoading: false,
  isError: false,
  errorMessage: null,
  product: null,
};

const productReducer = (
  state = initialState,
  {type, payload}: IProductAction,
) => {
  switch (type) {
    // request
    case actionTypes.GET_PRODUCT_BY_ID: {
      return {
        ...state,
        isLoading: true,
      };
    }

    // success
    case actionTypes.GET_PRODUCT_BY_ID_SUCCESS: {
      const product = payload.product;
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: null,
        product,
      };
    }

    // fail
    case actionTypes.GET_PRODUCT_BY_ID_FAIL: {
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

export default productReducer;
