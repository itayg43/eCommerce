import React, {useCallback} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Product} from '../../interfaces';
import {ProductDetailsNavigationProp} from '../../types';
import {styles} from './productListItemStyles';

interface Props {
  product: Product;
}

const ProductListItem = ({product}: Props) => {
  const navigation = useNavigation<ProductDetailsNavigationProp>();

  const handlePress = useCallback(() => {
    navigation.navigate('Product_Details', {productId: product._id});
  }, [navigation]);

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        {/** image */}
        <Image style={styles.image} source={{uri: product.imageUrl}} />

        {/** details */}
        <View style={styles.detailsContainer}>
          {/** name */}
          <Text style={styles.name}>{product.name}</Text>

          {/** price */}
          <Text style={styles.price}>${product.price}</Text>

          {/** description */}
          <Text style={styles.description} numberOfLines={2}>
            {product.description}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductListItem;
