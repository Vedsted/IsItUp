import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Front} from './src/Front';

export default function App() {
  return (
    <View style={styles.container}>
      <Front></Front>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
