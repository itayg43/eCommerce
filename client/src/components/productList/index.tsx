import React from 'react';
import {FlatList} from 'react-native';

import {useAppSelector} from '../../hooks';
import {selectFilteredProducts} from '../../redux/products/selectors';
import ProductListItem from '../productListItem';

const ProductList = () => {
  const filteredProducts = useAppSelector(selectFilteredProducts);

  return (
    <FlatList
      data={filteredProducts}
      renderItem={({item}) => <ProductListItem product={item} />}
      keyExtractor={item => item.id}
      contentInsetAdjustmentBehavior="automatic"
    />
  );
};

export default ProductList;
