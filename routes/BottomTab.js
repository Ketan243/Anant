/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import Home from '../components/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import ProductDetails from '../components/ProductDetails';
import Profile from '../components/Profile';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function BottomTabs() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={TabBar} />
        <Stack.Screen name="Details" component={ProductDetails} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}




const TabBar = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            }
            else if(route.name==="Info"){
              iconName = focused ? 'ios-notifications' : 'ios-notifications-outline';
            }
            else if (route.name === 'Settings') {
              iconName = focused ? 'ios-cart' : 'ios-cart-outline';
            }
            else if(route.name==="Add"){
              iconName = focused ? 'ios-add' : 'ios-add-outline';
              color = "white";
            }
            else if(route.name==="User"){
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={20} color={color} />;
          },
          tabBarActiveTintColor: '#6495ED',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Info" component={Home} options={
          {
            tabBarBadge: '2',
          }
        } />
        <Tab.Screen name="Add" component={Home}
        options={{
          tabBarItemStyle: {
            height: 35,
            backgroundColor: '#6495ED',
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 10,
            margin: 5,
          },
        }}
        />
        <Tab.Screen name="Settings" component={Home} />
        <Tab.Screen name="User" component={Profile} />
      </Tab.Navigator>
  );
};
