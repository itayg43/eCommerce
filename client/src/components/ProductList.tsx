import React, {useEffect, useState, useCallback} from 'react';
import {FlatList, View} from 'react-native';

import {sanityClient} from '../clients';
import {getAllProductsQuery} from '../queries';
import {Product} from '../interfaces';
import ProductListItem from './ProductListItem';

const ProductList = () => {
  const [products, setProducts] = useState<[Product] | []>([]);

  const handleGetProducts = useCallback(async () => {
    try {
      const receivedProducts = await sanityClient.fetch(getAllProductsQuery);
      setProducts(receivedProducts);
    } catch (error) {
      console.error(error);
    }
  }, [setProducts]);

  useEffect(() => {
    handleGetProducts();
  }, [handleGetProducts]);

  return (
    <FlatList
      data={products}
      renderItem={({item}) => <ProductListItem product={item} />}
      keyExtractor={item => item._id}
    />
  );
};

export default ProductList;
