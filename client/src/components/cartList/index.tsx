import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import {selectItems} from '../../redux/cart/selectors';
import CartListItem from '../cartListItem';

const CartList = () => {
  const items = useSelector(selectItems);

  return (
    <FlatList
      data={items}
      renderItem={({item}) => <CartListItem item={item} />}
      keyExtractor={item => item._id}
    />
  );
};

export default CartList;
