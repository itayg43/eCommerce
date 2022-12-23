import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

import ProductsScreen from '../screens/productsScreen';
import ProductDetailsScreen from '../screens/productDetailsScreen';

// products
export type ProductsNavigationProp = NativeStackNavigationProp<
  ProductsStackParamList,
  'Products'
>;

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
    <Stack.Navigator>
      {/** products */}
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          headerTransparent: true,
          headerBlurEffect: 'systemUltraThinMaterial',
        }}
      />

      {/** product details */}
      <Stack.Screen
        name="Product_Details"
        component={ProductDetailsScreen}
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
};

export default ProductsStackNavigator;
