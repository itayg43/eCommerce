import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import {selectProducts} from '../../redux/products/selectors';
import ProductListItem from '../productListItem';

const ProductList = () => {
  const products = useSelector(selectProducts);

  return (
    <FlatList
      data={products}
      renderItem={({item}) => <ProductListItem product={item} />}
      keyExtractor={item => item._id}
    />
  );
};

export default ProductList;
