import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

import Layout from '../components/layout';
import ProductList from '../components/productList';

const ProductsScreen = () => {
  return (
    <Layout>
      <Text variant="headlineLarge">Our Products</Text>
      <View style={{flex: 1, marginTop: 10}}>
        <ProductList />
      </View>
    </Layout>
  );
};

export default ProductsScreen;
