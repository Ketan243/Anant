/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

import BottomTab from './routes/BottomTab';
import type {Node} from 'react';
import React from 'react';

const App=()=> {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: 'isDarkMode ? Colors.darker : Colors.lighter',
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <BottomTab />
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  }
});

export default App;
