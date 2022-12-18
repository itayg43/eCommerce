import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ProductsStackParamList} from '../types';
import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailsScreen from '../screens/productDetailsScreen';

const Stack = createNativeStackNavigator<ProductsStackParamList>();

const ProductsStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Products"
      screenOptions={{
        headerShown: false,
      }}>
      {/** products */}
      <Stack.Screen name="Products" component={ProductsScreen} />

      {/** product details */}
      <Stack.Screen
        name="Product_Details"
        component={ProductDetailsScreen}
        options={{
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
};

export default ProductsStackNavigator;
