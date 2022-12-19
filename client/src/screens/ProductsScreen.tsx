import React from 'react';
import {useSelector} from 'react-redux';

import {selectProducts} from '../redux/products/selectors';
import Layout from '../components/layout';
import ProductList from '../components/productList';

const ProductsScreen = () => {
  const products = useSelector(selectProducts);

  return (
    <Layout>
      <ProductList products={products} />
    </Layout>
  );
};

export default ProductsScreen;
