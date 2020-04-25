'use strict';

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    //<View style={styles.container}>
      <Dashboard/>
    //</View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});