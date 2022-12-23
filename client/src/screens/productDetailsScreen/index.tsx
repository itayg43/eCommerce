import React, {useEffect, useState, useCallback} from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  ProductDetailsRouteProp,
  ProductDetailsNavigationProp,
} from '../../navigation/ProductsStackNavigator';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {selectProduct} from '../../redux/product/selectors';
import {addItemToCart} from '../../redux/cart/actions/addItemToCart';
import {getProductById} from '../../redux/product/actions/getProductById';
import styles from './productDetailsScreenStyles';

enum CHANGE_QUANTITY_ACTION {
  INCREMENT,
  DECREMENT,
}

const ProductDetailsScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<ProductDetailsNavigationProp>();
  const route = useRoute<ProductDetailsRouteProp>();

  const id = route.params?.id;
  const product = useAppSelector(selectProduct);
  const [quantity, setQuantity] = useState(1);

  const handleClose = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleQuantityChange = useCallback(
    (action: CHANGE_QUANTITY_ACTION) => {
      action === CHANGE_QUANTITY_ACTION.INCREMENT
        ? setQuantity(currentQuantity => currentQuantity + 1)
        : setQuantity(currentQuantity => currentQuantity - 1);
    },
    [setQuantity],
  );

  const handleAddToCart = useCallback(() => {
    if (product) {
      dispatch(addItemToCart(product, quantity));
      handleClose();
    }
  }, [dispatch, product, quantity, handleClose]);

  useEffect(() => {
    if (id) {
      dispatch(getProductById(id));
    }
  }, [dispatch, id]);

  return (
    <>
      {product && (
        <View style={styles.container}>
          {/** image */}
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: product.imageUrl}} />
          </View>

          {/** close btn */}
          <Pressable style={styles.closeBtnContainer} onPress={handleClose}>
            <MaterialCommunityIcons name="close" size={24} color="white" />
          </Pressable>

          {/** details */}
          <View style={styles.detailsContainer}>
            {/** name */}
            <Text style={styles.name}>{product.name}</Text>

            {/** price */}
            <Text style={styles.price}>${product.price}</Text>

            {/** description */}
            <Text style={styles.description}>{product.description}</Text>
          </View>

          {/** add to cart */}
          <View style={styles.addToCartContainer}>
            {/** quantity */}
            <View style={styles.quantityContainer}>
              {/** minus */}
              <Pressable
                onPress={() =>
                  handleQuantityChange(CHANGE_QUANTITY_ACTION.DECREMENT)
                }
                disabled={quantity === 1}>
                <MaterialCommunityIcons name="minus" size={18} color="white" />
              </Pressable>

              {/** quantity text */}
              <Text style={styles.quantity}>{quantity}</Text>

              {/** plus */}
              <Pressable
                onPress={() =>
                  handleQuantityChange(CHANGE_QUANTITY_ACTION.INCREMENT)
                }>
                <MaterialCommunityIcons name="plus" size={18} color="white" />
              </Pressable>
            </View>

            {/** add to cart btn */}
            <Pressable style={styles.addToCartBtn} onPress={handleAddToCart}>
              <Text style={styles.addToCartBtnText}>ADD TO CART</Text>
              <Text style={styles.addToCartBtnText}>
                ${product.price * quantity}
              </Text>
            </Pressable>
          </View>
        </View>
      )}
    </>
  );
};

export default ProductDetailsScreen;
