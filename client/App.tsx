import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';

import BottomTabNavigator from './src/navigation/BottomTabNavigator';

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
