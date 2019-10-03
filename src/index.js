import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import './config/ReactotronConfig';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7159c1',
    fontSize: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.black,
  },
});

console.tron.log('Hello World!');
console.tron.warn('!!Hello World!!');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Hello World</Text>
      <Text style={styles.sectionTitle}>React Native</Text>
    </View>
  );
}
