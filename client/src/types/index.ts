import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

import {ProductsProps, ProductDetailsProps} from '../interfaces';

// products stack
export type ProductsStackParamList = {
  Products: ProductsProps | undefined;
  Product_Details: ProductDetailsProps | undefined;
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
