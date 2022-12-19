import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

import {IProductsScreenProps, IProductDetailsScreenProps} from '../interfaces';

// products stack
export type ProductsStackParamList = {
  Products: IProductsScreenProps | undefined;
  Product_Details: IProductDetailsScreenProps | undefined;
};

// product details
// navigation
export type ProductDetailsNavigationProp = NativeStackNavigationProp<
  ProductsStackParamList,
  'Product_Details'
>;
// route
export type ProductDetailsRouteProp = RouteProp<
  ProductsStackParamList,
  'Product_Details'
>;
