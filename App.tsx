'use strict';

import React, { useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import Dashboard from './components/Dashboard';
import dashboard1 from './dashboards/dashboard1';


export default function App() {
  const delay = setTimeout(() => {setLoading(true)}, 3000);
  const [loaded, setLoading] = useState(false);


  return (
    <View style={styles.container}>
      {
        loaded ?
          <Dashboard config={dashboard1} /> :
          <ActivityIndicator size="large" color="lightgreen" />
      }
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
