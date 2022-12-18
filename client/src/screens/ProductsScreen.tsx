import React, {useEffect, useState, useCallback} from 'react';

import {sanityClient} from '../clients';
import {Product} from '../interfaces';
import {getAllProductsQuery} from '../queries';
import Layout from '../components/layout';
import ProductList from '../components/productList';

const ProductsScreen = () => {
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
    <Layout>
      <ProductList products={products} />
    </Layout>
  );
};

export default ProductsScreen;
