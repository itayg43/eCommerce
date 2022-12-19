import {IAppState, IAppAction} from '../../interfaces';
import actionTypes from './actions/actionTypes';

const initialState: IAppState = {
  isLoading: false,
  isReady: false,
};

const appReducer = (state = initialState, {type}: IAppAction) => {
  switch (type) {
    // request
    case actionTypes.GET_APP_DATA: {
      return {
        ...state,
        isLoading: true,
      };
    }

    // finish
    case actionTypes.GET_APP_DATA_FINISH: {
      return {
        ...state,
        isLoading: false,
        isReady: true,
      };
    }

    default: {
      return state;
    }
  }
};

export default appReducer;
