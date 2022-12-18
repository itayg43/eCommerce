import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';

interface ProductsProps {}

interface ProductDetailsProps {
  productId: string;
}

type ProductsStackParamList = {
  Products: ProductsProps | undefined;
  Product_Details: ProductDetailsProps | undefined;
};

// product details props
// navigation
export type ProductDetailsNavigationProp = NativeStackNavigationProp<
  ProductsStackParamList,
  'Product_Details'
>;
// route
export type ProductDetailsRouteProp = RouteProp<
  ProductsStackParamList,
  'Product_Details'
>;

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
