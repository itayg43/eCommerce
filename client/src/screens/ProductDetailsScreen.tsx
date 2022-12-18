import React from 'react';
import {Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

import {ProductDetailsRouteProp} from '../navigation/ProductsStackNavigator';

const ProductDetailsScreen = () => {
  const route = useRoute<ProductDetailsRouteProp>();

  return <Text>{route.params?.productId}</Text>;
};

export default ProductDetailsScreen;