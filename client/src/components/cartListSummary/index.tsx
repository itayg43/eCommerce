import React from 'react';
import {View, Text} from 'react-native';
import {Divider} from 'react-native-paper';

import {useAppSelector} from '../../hooks';
import {selectItemsCount, selectItemsCost} from '../../redux/cart/selectors';
import styles from './cartListSummaryStyles';

const CartListSummary = () => {
  const count = useAppSelector(selectItemsCount);
  const cost = useAppSelector(selectItemsCost);

  return (
    <View style={styles.container}>
      {/** count */}
      <View style={styles.countContainer}>
        <Text style={styles.count}>Amount of items:</Text>
        <Text>{count}</Text>
      </View>

      {/** divider */}
      <Divider style={styles.divider} />

      {/** cost */}
      <View style={styles.costContainer}>
        <Text style={styles.cost}>Total cost:</Text>
        <Text>${cost}</Text>
      </View>
    </View>
  );
};

export default CartListSummary;
