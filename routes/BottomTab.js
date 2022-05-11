/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import ViewDetails from '../components/ViewDetails';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MovieRatings from '../components/MovieRatings';
import MoviesList from '../components/MoviesList';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function BottomTabs() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="movie">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="movie"
          component={TabBar}
        />
        <Stack.Screen
          options={{  
            headerStyle: {
              backgroundColor: '#764AF1'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            headerTitle: 'Movie Details',
          }}
          name="ViewDetails"
          component={ViewDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'movie':
              iconName = 'ios-camera';
              break;
            case 'rating':
              iconName = 'ios-star';
              break;
    
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={28} color={focused?'blue':'red'} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'lightgray',
        activeBackgroundColor: '#764AF1',
        inactiveBackgroundColor: '#764AF1',
        style: {
          backgroundColor: '#764AF1',
          paddingBottom: 3,
        },
      }}
      initialRouteName="movie">
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name={'movie'}
        component={MoviesList}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name={'ratings'}
        component={MovieRatings}
      />
    </Tab.Navigator>
  );
};
