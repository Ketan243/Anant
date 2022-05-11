import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import axios from 'axios';


const MovieRatings = ({navigation}) => {
  const [movies, setMovies] = React.useState([]);
  const [movies2, setMovies2] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const url =
    'https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed';
  const fetchData = async () => {
    const resp = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed',
    );
    const data = await resp.json();
    setMovies(data.results);
    setMovies2(data.results);
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const Item = ({img, title, desc}) => (
    <View style={styles.item}>
      <View style={styles.card}>
        <View style={styles.cardImage}>
        <Image source={{uri: `https://image.tmdb.org/t/p/w342${img}`}} style={styles.image} />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      </View>
    </View>
  );

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
      onPress={() => {
        navigation.navigate('ViewDetails', {
          title: item.title,
          img: item.poster_path,
          preview: item.overview,
          duration: item.release_date,
          rating: item.vote_average,
        });
       
      }}>
        <Item
          key={item._id}
          img={item.poster_path}
          title={item.original_title}
          desc={item.overview}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={text => {
          text
            ? setMovies(
                movies.filter(movie =>
                  movie.title.toLowerCase().includes(text.toLowerCase()),
                ),
              )
            : setMovies(movies2);
        }}
      />
      <View style={styles.list}>
        <FlatList
          data={movies}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          onRefresh={fetchData}
          refreshing={loading}
        />
      </View>
    </View>
  );
};

export default MovieRatings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15133C',
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  list: {
    height: '90%',
    backgroundColor: '#764AF1',
    padding: 10,
    borderRadius: 10,
  },
  item: {
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#764AF1',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: '40%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  cardContent: {
    width: '70%',
    padding: 10,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  desc: {
    fontSize: 16,
    height: 40,
    fontFamily: 'Roboto',
    color: '#ccc',
    marginBottom: 5,
  },
});
