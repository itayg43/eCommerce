import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Image, Text, Pressable} from 'react-native';
import {Button} from 'react-native-paper';
import {useRoute, useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {getProductById} from '../../redux/product/actions/getProductById';
import {selectProduct} from '../../redux/product/selectors';
import {addItemToCart} from '../../redux/cart/actions/addItemToCart';
import {
  ProductDetailsRouteProp,
  ProductDetailsNavigationProp,
} from '../../types';
import styles from './productDetailsScreenStyles';

const ProductDetailsScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<ProductDetailsNavigationProp>();
  const route = useRoute<ProductDetailsRouteProp>();

  const id = route.params?.id;
  const product = useSelector(selectProduct);

  const handleClose = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleAddToCart = () => {
    dispatch<any>(addItemToCart(product));
    handleClose();
  };

  useEffect(() => {
    const isDifferentId = id && id !== product?._id;
    if (isDifferentId) {
      dispatch<any>(getProductById(id));
    }
  }, [dispatch, id]);

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
