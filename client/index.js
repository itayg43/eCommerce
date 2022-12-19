import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Provider as StoreProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import App from './App';

import store from './src/redux/store';

const Root = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
