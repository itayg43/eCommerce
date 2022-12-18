import React, {ReactNode} from 'react';
import {SafeAreaView, View} from 'react-native';

import {styles} from './layoutStyles';

interface Props {
  children: ReactNode;
}

const Layout = ({children}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>{children}</View>
    </SafeAreaView>
  );
};

export default Layout;
