import {StyleSheet, Text, View, Image, ScrollView,TouchableOpacity} from 'react-native';
import React from 'react';

const Products = ({navigation}) => {
  const data = [
    {
      id: 1,
      image:
        'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 2,
      image:
        'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 3,
      image:
        'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 4,
      image:
        'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
    {
      id: 5,
      image:
        'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Top Products</Text>
        <Text style={styles.more}>More</Text>
      </View>
      <ScrollView
        style={styles.scroll}
        horizontal={true}
        showsVerticalScrollIndicator={false}>
        {data.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() =>navigation.navigate('Details')}>
            <View style={styles.card}>
              <View style={styles.cardContent}>
                <Image
                  style={styles.image}
                  source={{uri: 'https://picsum.photos/200/300?random=1'}}
                />
                <Text style={styles.cardTitle}>Product Name</Text>
                <Text style={styles.cardDescription}>Product Description</Text>
                <Text style={styles.cardPrice}>$100</Text>
              </View>
            </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View style={{marginVertical:10}}>
        <Text style={styles.title}>Discounted Products</Text>
        <ScrollView style={styles.scroll} horizontal={true}>
            {data.map((item, index) => {
                return (
                    <View style={styles.discountedContainer}>
                        <Image style={styles.discountImage} source={{uri: 'https://picsum.photos/200/300?random=1'}}/>
                        <Text style={styles.discountTitle}>20% off</Text>
                    </View>
                );
            })}
        </ScrollView>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Mostly ordered Products</Text>
        <Text style={styles.more}>More</Text>
      </View>
      <ScrollView
        style={styles.scroll}
        horizontal={true}
        showsVerticalScrollIndicator={false}>
        {data.map((item, index) => {
          return (
            <View style={styles.card}>
              <View style={styles.cardContent}>
                <Image
                  style={styles.image}
                  source={{uri: 'https://picsum.photos/200/300?random=1'}}
                />
                <Text style={styles.cardTitle}>Product Name</Text>
                <Text style={styles.cardDescription}>Product Description</Text>
                <Text style={styles.cardPrice}>$100</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'times',
  },
  more: {
    fontSize: 15,
    color: 'skyblue',
    fontFamily: 'times',
  },
  scroll: {
    flex: 1,
    marginTop: 5,
  },
  card: {
    height: 230,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'times',
  },
  cardDescription: {
    fontSize: 14,
    color: 'gray',
    fontFamily: 'times',
  },
  cardPrice: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'times',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
    discountedContainer: {
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 10,
    },
    discountImage: {
        width: 60,
        height: 60,
        borderRadius: 150,
    },
    discountTitle: {
        alignSelf: 'center',
        fontSize: 12,
        color: 'black',
        fontFamily: 'times',
    }
});
