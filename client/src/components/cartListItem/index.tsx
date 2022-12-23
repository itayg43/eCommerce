import React, {useCallback} from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useAppDispatch} from '../../hooks';
import {removeItemFromCart} from '../../redux/cart/actions/removeItemFromCart';
import {CartItem} from '../../interfaces';
import styles from './cartListItemStyles';

interface Props {
  item: CartItem;
}

const CartListItem = ({item}: Props) => {
  const dispatch = useAppDispatch();

  const handleRemove = useCallback(() => {
    dispatch(removeItemFromCart(item));
  }, [dispatch, item]);

  return (
    <View style={styles.container}>
      {/** image */}
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: item.imageUrl}} />
      </View>

      {/** name, price, quantity */}
      <View style={styles.detailsContainer}>
        {/** name */}
        <Text style={styles.name} numberOfLines={1}>
          {item.name}
        </Text>

        {/** price */}
        <Text style={styles.price}>${item.price}</Text>

        {/** quantity */}
        <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
      </View>

      {/** delete */}
      <Pressable style={styles.deleteBtn} onPress={handleRemove}>
        <MaterialCommunityIcons name="trash-can" size={20} color="white" />
      </Pressable>
    </View>
  );
};

export default CartListItem;
