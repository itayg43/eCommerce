import React, {useCallback} from 'react';
import {View, Image, Text} from 'react-native';

import {useAppDispatch} from '../../hooks';
import {removeItemFromCart} from '../../redux/cart/actions/removeItemFromCart';
import {CartItem} from '../../utils/entities';
import IconButton from '../iconButton';
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
        <Image style={styles.image} source={{uri: item.pImageUrl}} />
      </View>

      {/** name, price, quantity */}
      <View style={styles.detailsContainer}>
        {/** name */}
        <Text style={styles.name} numberOfLines={1}>
          {item.pName}
        </Text>

        {/** price */}
        <Text style={styles.price}>${item.pPrice}</Text>

        {/** quantity */}
        <Text style={styles.quantity}>Quantity: {item.pQuantity}</Text>
      </View>

      {/** remove */}
      <IconButton
        style={styles.removeButton}
        name="trash-can"
        size={20}
        color="white"
        onPress={handleRemove}
      />
    </View>
  );
};

export default CartListItem;
