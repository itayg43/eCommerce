import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailsScreen from '../screens/productDetailsScreen';

// product details
// screen props
interface ProductDetailsScreenProps {
  id: string;
}

// navigation prop
export type ProductDetailsNavigationProp = NativeStackNavigationProp<
  ProductsStackParamList,
  'Product_Details'
>;

// route prop
export type ProductDetailsRouteProp = RouteProp<
  ProductsStackParamList,
  'Product_Details'
>;

export type ProductsStackParamList = {
  Products: undefined;
  Product_Details: ProductDetailsScreenProps | undefined;
};

const Stack = createNativeStackNavigator<ProductsStackParamList>();

const ProductsStackNavigator = () => {
  return (
    <Stack.Navigator
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
