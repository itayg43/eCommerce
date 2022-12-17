import React, {ReactNode} from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 5,
  },
});
