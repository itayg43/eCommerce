import React from 'react';
import {FlatList} from 'react-native';

import {Product} from '../../interfaces';
import ProductListItem from '../productListItem';

interface Props {
  products: [Product] | [];
}

const ProductList = ({products}: Props) => {
  return (
    <FlatList
      data={products}
      renderItem={({item}) => <ProductListItem product={item} />}
      keyExtractor={item => item._id}
    />
  );
};

export default ProductList;
