import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import productsReducer from './products/reducer';
import productReducer from './product/reducer';
import {IProductsState, IProductState} from '../interfaces';

const initialState = {};
const reducers = combineReducers({
  productsState: productsReducer,
  productState: productReducer,
});
const middlewares = [thunk];

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares),
);

export interface IStoreState {
  productsState: IProductsState;
  productState: IProductState;
}

export default store;
