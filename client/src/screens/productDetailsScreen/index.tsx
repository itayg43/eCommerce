import React, {useEffect, useState, useCallback} from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {sanityClient} from '../../clients';
import {Product} from '../../interfaces';
import {
  ProductDetailsRouteProp,
  ProductDetailsNavigationProp,
} from '../../types';
import {getProductByIdQuery} from '../../queries';
import styles from './productDetailsScreenStyles';

const ProductDetailsScreen = () => {
  const navigation = useNavigation<ProductDetailsNavigationProp>();
  const route = useRoute<ProductDetailsRouteProp>();

  const [product, setProduct] = useState<Product | null>(null);

  const handleGetProductById = useCallback(
    async (id: string) => {
      try {
        const receivedProduct = await sanityClient.fetch(getProductByIdQuery, {
          id,
        });
        setProduct(receivedProduct);
      } catch (error) {
        console.error(error);
      }
    },
    [setProduct],
  );

  const handleClose = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  useEffect(() => {
    const id = route.params?.id;
    if (id) {
      handleGetProductById(id);
    }
  }, [route.params?.id, handleGetProductById]);

  return (
    <View style={styles.container}>
      {/** image */}
      <Image style={styles.image} source={{uri: product?.imageUrl}} />

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
    </View>
  );
};

export default ProductDetailsScreen;
