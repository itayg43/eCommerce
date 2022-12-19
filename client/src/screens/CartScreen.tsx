import React from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';

import {selectItems} from '../redux/cart/selectors';
import Layout from '../components/layout';

const CartScreen = () => {
  const items = useSelector(selectItems);

  return (
    <Layout>
      <Text>Cart</Text>
    </Layout>
  );
};

export default CartScreen;
