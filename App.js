/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

import MoviesList from './components/MoviesList'
import type {Node} from 'react';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTab from './routes/BottomTab';
const App=()=> {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: 'isDarkMode ? Colors.darker : Colors.lighter',
  };

  return (
    <SafeAreaView style={[styles.container,backgroundStyle]}>
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
  }
});

export default App;
