import {getAppDataStarted, getAppDataFinished} from '../slice';
import {getAllProducts} from '../../products/actions/getAllProducts';
import {AppDispatch} from '../../store';

export const getAppData = () => async (dispatch: AppDispatch) => {
  dispatch(getAppDataStarted());
  await Promise.all([dispatch(getAllProducts())]);
  dispatch(getAppDataFinished());
};
