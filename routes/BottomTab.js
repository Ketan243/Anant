/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import Header from '../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MovieRatings from '../components/MovieRatings';
import MoviesList from '../components/MoviesList';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function BottomTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name={'movie'} component={MoviesList} />
        <Tab.Screen name={'ratings'} component={MovieRatings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
