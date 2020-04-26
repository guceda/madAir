'use strict';

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Dashboard from './components/Dashboard';
import dashboard1 from './dashboards/dashboard1';

export default function App() {
  return (
    <View style={styles.container}>
      <Dashboard config={dashboard1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
