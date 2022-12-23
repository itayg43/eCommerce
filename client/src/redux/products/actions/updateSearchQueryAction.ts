import {updateSearchQuery} from '../slice';
import {AppDispatch} from '../../store';

export const updateSearchQueryAction =
  (query: string) => async (dispatch: AppDispatch) => {
    dispatch(updateSearchQuery(query));
  };
