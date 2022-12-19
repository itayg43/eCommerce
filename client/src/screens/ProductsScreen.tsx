import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getAllProducts} from '../redux/products/actions/getAllProducts';
import {selectProducts} from '../redux/products/selectors';
import Layout from '../components/layout';
import ProductList from '../components/productList';

const ProductsScreen = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch<any>(getAllProducts());
  }, [dispatch]);

  return (
    <Layout>
      <ProductList products={products} />
    </Layout>
  );
};

export default ProductsScreen;
