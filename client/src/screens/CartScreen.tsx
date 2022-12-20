import React from 'react';
import {Text} from 'react-native';

import Layout from '../components/layout';
import CartList from '../components/cartList';

const CartScreen = () => {
  return (
    <Layout>
      <Text>My Cart</Text>
      <CartList />
    </Layout>
  );
};

export default CartScreen;
