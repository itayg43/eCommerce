import React from 'react';
import {View} from 'react-native';
import {Text, Divider} from 'react-native-paper';

import Layout from '../../components/layout';
import CartList from '../../components/cartList';
import styles from './cartScreenStyles';

const CartScreen = () => {
  return (
    <Layout>
      <Text variant="headlineLarge">My Cart</Text>

      {/** cart list */}
      {/* <View style={styles.cartListContainer}>
        <CartList />
      </View> */}
    </Layout>
  );
};

export default CartScreen;

/**
 * 
 * {amountOfItems > 0 && (
        <>
          {/** summary */
//     <View style={styles.summaryContainer}>
//       {/** amount of items */}
//       <View style={styles.amountOfItemsContainer}>
//         <Text style={styles.amount}>Amount of items:</Text>
//         <Text>{amountOfItems}</Text>
//       </View>

//       {/** divider */}
//       <Divider style={styles.divider} />

//       {/** total cost */}
//       <View style={styles.totalCostContainer}>
//         <Text style={styles.totalCost}>Total cost:</Text>
//         <Text>${totalCost}</Text>
//       </View>
//     </View>
//   </>
// )}
