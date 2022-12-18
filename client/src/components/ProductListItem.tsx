import React, {useCallback} from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';

import {Product} from '../interfaces';

interface Props {
  product: Product;
}

const ProductListItem = ({product}: Props) => {
  const handlePress = useCallback(() => {}, []);

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    padding: 10,
  },
  name: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  price: {
    marginTop: 5,
  },
  description: {
    marginTop: 5,
  },
});
