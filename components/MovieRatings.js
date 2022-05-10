import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import React from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/top_rated?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed',
});

const MovieRatings = ({navigation}) => {
  const [movies, setMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  
  const getData = async() =>{
    await api.get('/')
    .then((res)=>{
        setMovies(res.results)
    })
  }

  const Item = ({img,title,desc})=>(
    <View style={styles.item}>
      <View style={styles.card}>
        <View style={styles.cardImage}>
          <Image source={{uri:img}} style={styles.image} />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      </View>
    </View>
  );

  const renderItem = ({item})=>{
    return (
      <TouchableOpacity onPres={()=>{navigation.navigate('ViewDetails',{
        title:item.title,
        img:item.backdrop_path,
        preview:item.overview,
        duration:item.runtime,
        rating:item.vote_average
      })}}>
        <Item key={item._id} img={item.poster_path} title={item.original_title} desc={item.overview} />
      </TouchableOpacity>
      
    )
  }
  return (
    <View style={style.container}>
      <TextInput 
        style={styles.input}
        placeholder="Search"
        onChangeText={(text)=>{
          setMovies(movies.filter(movie=>movie.title.toLowerCase().includes(text.toLowerCase())))
        }
        }
      />

      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        onRefresh={getData}
        refreshing={loading}
      />
    </View>
  );
};

export default MovieRatings;

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:'#fff',
        padding:10,
    },
    input:{
        borderWidth:1,
        borderColor:'#ccc',
        padding:10,
        marginBottom:10,
        borderRadius:10,
    },

});