
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { style } from './src/StyleSheet'
import Screen from './src/Screens'

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={style.Body}>
      <Screen />
    </SafeAreaView>
  );
}


export default App;
