import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';

import styles from './addToCartButtonStyles';

interface Props {
  price: number;
  onPress: () => void;
}

const AddToCartButton = ({price, onPress}: Props) => {
  return (
    <Pressable style={styles.addToCartBtn} onPress={onPress}>
      <Text style={styles.addToCartBtnText}>ADD TO CART</Text>
      <Text style={styles.addToCartBtnText}>${price}</Text>
    </Pressable>
  );
};

export default AddToCartButton;
