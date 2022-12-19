import {Dispatch} from 'redux';

import actionTypes from './actionTypes';
import {IAppAction} from '../../../interfaces';
import {getAllProducts} from '../../products/actions/getAllProducts';

const getAppDataAction = (): IAppAction => ({
  type: actionTypes.GET_APP_DATA,
});

const getAppDataActionFinish = (): IAppAction => ({
  type: actionTypes.GET_APP_DATA_FINISH,
});

export const getAppData = () => async (dispatch: Dispatch) => {
  dispatch(getAppDataAction());
  Promise.all([dispatch<any>(getAllProducts())]);
  dispatch(getAppDataActionFinish());
};
