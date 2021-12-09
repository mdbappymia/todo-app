import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Home from './Components/Home/Home';

const App = () => {
  return (
    <View style={styles.appStyle}>
      <View style={styles.headingBackground}>
        <Text style={styles.headingText}>Todo App</Text>
      </View>
      <Home />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  appStyle: {
    backgroundColor: '#0D1245',
  },
  headingText: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'orange',
    fontWeight: '900',
  },
  headingBackground: {
    backgroundColor: '#0F33D1',
  },
});
