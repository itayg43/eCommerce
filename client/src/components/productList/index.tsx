import React from 'react';
import {FlatList} from 'react-native';

import {useAppSelector} from '../../hooks';
import {selectProducts} from '../../redux/products/selectors';
import ProductListItem from '../productListItem';

const ProductList = () => {
  const products = useAppSelector(selectProducts);

  return (
    <FlatList
      data={products}
      renderItem={({item}) => <ProductListItem product={item} />}
      keyExtractor={item => item._id}
    />
  );
};

export default ProductList;
