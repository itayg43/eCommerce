import React from 'react';
import {View} from 'react-native';
import {Text, Divider} from 'react-native-paper';

import {useAppSelector} from '../../hooks';
import {selectAmountOfItems, selectTotalCost} from '../../redux/cart/selectors';
import {Layout, CartList} from '../../components';
import styles from './cartScreenStyles';

const CartScreen = () => {
  const amountOfItems = useAppSelector(selectAmountOfItems);
  const totalCost = useAppSelector(selectTotalCost);

  return (
    <Layout>
      {/** cart list */}
      <View style={styles.cartListContainer}>
        <CartList />
      </View>

      {/** summary */}
      {amountOfItems > 0 && (
        <>
          <View style={styles.summaryContainer}>
            {/** amount */}
            <View style={styles.amountOfItemsContainer}>
              <Text style={styles.amount}>Amount of items:</Text>
              <Text>{amountOfItems}</Text>
            </View>

            {/** divider */}
            <Divider style={styles.divider} />

            {/** cost */}
            <View style={styles.totalCostContainer}>
              <Text style={styles.totalCost}>Total cost:</Text>
              <Text>${totalCost}</Text>
            </View>
          </View>
        </>
      )}
    </Layout>
  );
};

export default CartScreen;
