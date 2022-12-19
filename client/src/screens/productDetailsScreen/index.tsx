import React, {useEffect, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {View, Image, Text, Pressable} from 'react-native';
import {Button} from 'react-native-paper';
import {useRoute, useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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

  const handleClose = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleAddToCart = () => {
    //dispatch<any>()
    handleClose();
  };

  useEffect(() => {
    if (id) {
      //dispatch<any>();
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
