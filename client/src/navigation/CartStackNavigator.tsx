import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CartScreen from '../screens/cartScreen';

const Stack = createNativeStackNavigator();

const CartStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="cart"
        component={CartScreen}
        options={{
          headerTitle: 'My Cart',
          headerTransparent: true,
          headerBlurEffect: 'systemUltraThinMaterial',
        }}
      />
    </Stack.Navigator>
  );
};

export default CartStackNavigator;
