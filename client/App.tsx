import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';

import ProductList from './src/components/ProductList';

const App = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.contentContainer}>
        {/** title */}
        <Text style={styles.title}>Our Products</Text>

        {/** products */}
        <View style={styles.productListContainer}>
          <ProductList />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  productListContainer: {
    marginTop: 5,
  },
});
