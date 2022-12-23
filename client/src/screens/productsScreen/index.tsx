import React, {useEffect, useState, useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {ProductsNavigationProp} from '../../navigation/ProductsStackNavigator';
import {useAppDispatch, useDebounce} from '../../hooks';
import {updateSearchQueryAction} from '../../redux/products/actions/updateSearchQueryAction';
import {Layout, ProductList} from '../../components';

const ProductsScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<ProductsNavigationProp>();

  const [searchQuery, setSearchQuery] = useState('');
  const debouncedQuery = useDebounce(searchQuery);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        onChangeText: event => setSearchQuery(event.nativeEvent.text),
      },
    });
  }, [navigation]);

  useEffect(() => {
    dispatch(updateSearchQueryAction(debouncedQuery));
  }, [dispatch, debouncedQuery]);

  return (
    <Layout>
      <ProductList />
    </Layout>
  );
};

export default ProductsScreen;
