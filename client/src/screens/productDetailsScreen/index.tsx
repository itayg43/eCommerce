import React, {useEffect, useCallback} from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import {Button} from 'react-native-paper';
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

const ProductDetailsScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<ProductDetailsNavigationProp>();
  const route = useRoute<ProductDetailsRouteProp>();

  const id = route.params?.id;
  const product = useAppSelector(selectProduct);

  const handleClose = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleAddToCart = useCallback(() => {
    if (product) {
      dispatch(addItemToCart(product, 1));
      handleClose();
    }
  }, [dispatch, product, handleClose]);

  useEffect(() => {
    const isDifferentId = id && id !== product?._id;
    if (isDifferentId) {
      dispatch(getProductById(id));
    }
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {/** image */}
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: product?.imageUrl}} />
      </View>

      {/** close btn */}
      <Pressable style={styles.closeBtnContainer} onPress={handleClose}>
        <MaterialCommunityIcons name="close" size={28} />
      </Pressable>

      {/** details */}
      <View style={styles.detailsContainer}>
        {/** name */}
        <Text style={styles.name}>{product?.name}</Text>

        {/** price */}
        <Text style={styles.price}>${product?.price}</Text>

        {/** description */}
        <Text style={styles.description}>{product?.description}</Text>
      </View>

      {/** add to cart btn */}
      <View style={styles.addToCartBtnContainer}>
        <Button
          style={styles.addToCartBtn}
          icon="plus"
          mode="contained"
          uppercase
          onPress={handleAddToCart}>
          Add to cart
        </Button>
      </View>
    </View>
  );
};

export default ProductDetailsScreen;
