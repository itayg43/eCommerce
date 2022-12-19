import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import appReducer from './app/reducer';
import productsReducer from './products/reducer';
import productReducer from './product/reducer';
import cartReducer from './cart/reducer';
import {
  IAppState,
  IProductsState,
  IProductState,
  ICartState,
} from '../interfaces';

const initialState = {};
const reducers = combineReducers({
  appState: appReducer,
  productsState: productsReducer,
  productState: productReducer,
  cartState: cartReducer,
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
  cartState: ICartState;
}

export default store;
