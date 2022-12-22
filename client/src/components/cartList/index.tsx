import React from 'react';
import {FlatList} from 'react-native';

import {useAppSelector} from '../../hooks';
import {selectItems} from '../../redux/cart/selectors';
import CartListItem from '../cartListItem';

const CartList = () => {
  const items = useAppSelector(selectItems);

  return (
    <FlatList
      data={items}
      renderItem={({item}) => <CartListItem item={item} />}
      keyExtractor={item => item._id}
    />
  );
};

export default CartList;
