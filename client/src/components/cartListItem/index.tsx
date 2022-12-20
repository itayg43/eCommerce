import React, {useCallback} from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';

import {removeItemFromCart} from '../../redux/cart/actions/removeItemFromCart';
import {CartItemEntity} from '../../entities/CartItem';
import styles from './cartListItemStyles';

interface Props {
  item: CartItemEntity;
}

const CartListItem = ({item}: Props) => {
  const dispatch = useDispatch();

  const handleRemoveItemFromCart = useCallback(() => {
    dispatch<any>(removeItemFromCart(item));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {/** image */}
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: item.imageUrl}} />
      </View>

      {/** name, price */}
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
      <Pressable
        style={styles.deleteBtnContainer}
        onPress={handleRemoveItemFromCart}>
        <MaterialCommunityIcons name="trash-can" size={20} color="white" />
      </Pressable>
    </View>
  );
};

export default CartListItem;
