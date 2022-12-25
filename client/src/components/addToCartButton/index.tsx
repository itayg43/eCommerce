import React from 'react';
import {Text, Pressable} from 'react-native';

import styles from './addToCartButtonStyles';

interface Props {
  price: number;
  onPress: () => void;
}

const AddToCartButton = ({price, onPress}: Props) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>ADD TO CART</Text>
      <Text style={styles.buttonText}>${price}</Text>
    </Pressable>
  );
};

export default AddToCartButton;
