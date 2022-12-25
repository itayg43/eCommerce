import React, {useEffect, useState, useCallback} from 'react';
import {View, Image, Text} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';

import {
  ProductDetailsRouteProp,
  ProductDetailsNavigationProp,
} from '../../navigation/ProductsStackNavigator';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {selectProduct} from '../../redux/product/selectors';
import {addItemToCart} from '../../redux/cart/actions/addItemToCart';
import {getProductById} from '../../redux/product/actions/getProductById';
import {
  IconButton,
  AddToCartButton,
  QuantitySelectionButton,
} from '../../components';
import {CHANGE_QUANTITY_ACTION} from '../../utils/enums';
import styles from './productDetailsScreenStyles';

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
    <View style={styles.container}>
      {/** image */}
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: product?.imageUrl}} />
      </View>

      {/** close btn */}
      <IconButton
        style={styles.closeBtnContainer}
        name="close"
        size={24}
        color="white"
        onPress={handleClose}
      />

      {/** details */}
      <View style={styles.detailsContainer}>
        {/** name */}
        <Text style={styles.name}>{product?.name}</Text>

        {/** price */}
        <Text style={styles.price}>${product?.price}</Text>

        {/** description */}
        <Text style={styles.description}>{product?.description}</Text>
      </View>

      {/** add to cart */}
      <View style={styles.addToCartContainer}>
        {/** quantity */}
        <QuantitySelectionButton
          quantity={quantity}
          onChange={handleQuantityChange}
        />

        {/** add to cart btn */}
        <AddToCartButton
          price={product ? product.price * quantity : 0}
          onPress={handleAddToCart}
        />
      </View>
    </View>
  );
};

export default ProductDetailsScreen;
