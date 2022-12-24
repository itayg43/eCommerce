import React from 'react';
import {View} from 'react-native';
import {Text, Divider} from 'react-native-paper';

import {useAppSelector} from '../../hooks';
import {selectItemsCount, selectItemsCost} from '../../redux/cart/selectors';
import {Layout, CartList} from '../../components';
import styles from './cartScreenStyles';

const CartScreen = () => {
  const itemsCount = useAppSelector(selectItemsCount);
  const itemsCost = useAppSelector(selectItemsCost);

  return (
    <Layout>
      {/** cart list */}
      <View style={styles.cartListContainer}>
        <CartList />
      </View>

      {/** summary */}
      {itemsCount > 0 && (
        <>
          <View style={styles.summaryContainer}>
            {/** amount */}
            <View style={styles.amountOfItemsContainer}>
              <Text style={styles.amount}>Amount of items:</Text>
              <Text>{itemsCount}</Text>
            </View>

            {/** divider */}
            <Divider style={styles.divider} />

            {/** cost */}
            <View style={styles.totalCostContainer}>
              <Text style={styles.totalCost}>Total cost:</Text>
              <Text>${itemsCost}</Text>
            </View>
          </View>
        </>
      )}
    </Layout>
  );
};

export default CartScreen;
