import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import AppContainer from './Component/MainComponent';
import AppContainer from './Component/MainComponent';
export default function App() {
  return (
    <View>
      <Text> This is a app </Text>
      <AppContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
