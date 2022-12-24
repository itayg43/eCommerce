import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useAppSelector} from '../hooks';
import {selectItemsCount} from '../redux/cart/selectors';
import ProductsStackNavigator from './ProductsStackNavigator';
import CartStackNavigator from './CartStackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const itemsCount = useAppSelector(selectItemsCount);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      {/** products */}
      <Tab.Screen
        name="productsStack"
        component={ProductsStackNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="apps" color={color} size={size} />
          ),
        }}
      />

      {/** cart */}
      <Tab.Screen
        name="cartStack"
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
          tabBarBadge: itemsCount,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
