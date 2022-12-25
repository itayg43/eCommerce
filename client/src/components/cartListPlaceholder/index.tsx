import React, {useCallback} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import {ProductsNavigationProp} from '../../navigation/ProductsStackNavigator';
import styles from './cartListPlaceholderStyles';

const CartListPlaceholder = () => {
  const navigation = useNavigation<ProductsNavigationProp>();

  const handleNavigate = useCallback(() => {
    navigation.navigate('products');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text>No items!</Text>

      <Button
        style={styles.navigateButton}
        mode="contained"
        onPress={handleNavigate}>
        Click here to start adding items
      </Button>
    </View>
  );
};

export default CartListPlaceholder;
