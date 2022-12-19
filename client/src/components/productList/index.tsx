import React from 'react';
import {FlatList} from 'react-native';

import {IProduct} from '../../interfaces';
import ProductListItem from '../productListItem';

interface Props {
  products: [IProduct] | [];
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
