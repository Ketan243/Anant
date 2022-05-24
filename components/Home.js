import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CarouselView from './static/Carousel';
import Categories from './static/categories';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import Products from './static/Products';
const image = 'https://picsum.photos/200/300?random=1';

const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor="#6495ED" />
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image source={{uri: image}} style={styles.userImage} />
          <View
            style={{
              width: 80,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <Icon name="ios-notifications-outline" size={23} color="white" />
            <Icon name="ios-cart-outline" size={23} color="white" />
          </View>
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            marginTop: 15,
            fontFamily: 'times',
          }}>
          Hi, Ben
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: 'white',
            fontFamily: 'times',
          }}>
          Welcome to anant
        </Text>
      </View>
      <View style={styles.search}>
        <Icon name="ios-search" size={20} color="#A8A8A8" />
        <TextInput
          style={styles.searchInput}
          placeholder={"Search Medicine & Healthcare products"}
          placeholderTextColor="#A8A8A8"
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.categories}>
        <Categories />
      </View>
        
        <View style={styles.body}>
        <CarouselView />
        <Products navigation={navigation}/>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 200,
    backgroundColor: '#6495ED',
    padding: 15,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: 'white',
  },
  search: {
    width: '80%',
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    alignSelf: 'center',
    height: 60,
    marginTop: -20,
    marginHorizontal: 10,
    borderRadius: 30,
    elevation: 2,
    padding: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 12,
    fontFamily: 'times',
  },
  categories: {
    marginTop: 10,
    paddingLeft:15
  },
  body: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    marginVertical: 10,
  },
  
});
