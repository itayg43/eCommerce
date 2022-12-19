import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import appReducer from './app/reducer';
import productsReducer from './products/reducer';
import productReducer from './product/reducer';
import {IAppState, IProductsState, IProductState} from '../interfaces';

const initialState = {};
const reducers = combineReducers({
  appState: appReducer,
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
  appState: IAppState;
  productsState: IProductsState;
  productState: IProductState;
}

export default store;
