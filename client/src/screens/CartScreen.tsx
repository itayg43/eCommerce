import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

import Layout from '../components/layout';
import CartList from '../components/cartList';

const CartScreen = () => {
  return (
    <Layout>
      <Text variant="headlineLarge">My Cart</Text>
      <View style={{flex: 1, marginTop: 10}}>
        <CartList />
      </View>
    </Layout>
  );
};

export default CartScreen;
