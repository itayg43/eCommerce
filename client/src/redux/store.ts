import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import productsReducer from './products/reducer';
import {IProductsState} from '../interfaces';

const initialState = {};
const reducers = combineReducers({
  productsState: productsReducer,
});
const middlewares = [thunk];

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares),
);

export interface IStoreState {
  productsState: IProductsState;
}

export default store;
