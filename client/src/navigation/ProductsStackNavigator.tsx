import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

import ProductsScreen from '../screens/productsScreen';
import ProductDetailsScreen from '../screens/productDetailsScreen';

// products
// navigation prop
export type ProductsNavigationProp = NativeStackNavigationProp<
  ProductsStackParamList,
  'products'
>;

// product details
// screen props
interface ProductDetailsScreenProps {
  id: string;
}

// navigation prop
export type ProductDetailsNavigationProp = NativeStackNavigationProp<
  ProductsStackParamList,
  'productDetails'
>;

// route prop
export type ProductDetailsRouteProp = RouteProp<
  ProductsStackParamList,
  'productDetails'
>;

export type ProductsStackParamList = {
  products: undefined;
  productDetails: ProductDetailsScreenProps | undefined;
};

const Stack = createNativeStackNavigator<ProductsStackParamList>();

const ProductsStackNavigator = () => {
  return (
    <Stack.Navigator>
      {/** products */}
      <Stack.Screen
        name="products"
        component={ProductsScreen}
        options={{
          headerTitle: 'Our Products',
          headerLargeTitle: true,
          headerTransparent: true,
          headerBlurEffect: 'systemUltraThinMaterial',
        }}
      />

      {/** product details */}
      <Stack.Screen
        name="productDetails"
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
