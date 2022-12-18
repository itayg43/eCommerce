import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {ROUTES} from './routes';
import ProductsScreen from '../screens/ProductsScreen';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.PRODUCTS}
      screenOptions={{headerShown: false}}>
      {/** products */}
      <Tab.Screen
        name={ROUTES.PRODUCTS}
        component={ProductsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="apps" color={color} size={size} />
          ),
        }}
      />

      {/** cart */}
      <Tab.Screen
        name={ROUTES.CART}
        component={CartScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
