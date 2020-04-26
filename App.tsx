'use strict';

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Dashboard from './components/Dashboard';
import dashboard1 from './dashboards/dashboard1';

export default function App() {
  return (
      <Dashboard config={dashboard1}/>
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
