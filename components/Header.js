
import { StyleSheet, Text, TextInput, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.header}>
      <TextInput 
        title="Search"
        placeholder="Search"
        style={styles.search}
      />
      <Icon 
        name="ios-search"
        size={30}
        color="white"
        style={styles.searchIcon} 
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#fff',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    searchIcon:{
        padding: 10,
        backgroundColor: '#eee',
    },
});
