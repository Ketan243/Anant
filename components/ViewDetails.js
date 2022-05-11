import { ImageBackground, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const ViewDetails = ({route}) => {
    const {title,img,preview,duration,rating} = route.params;
    console.log(duration);
  return (
    <View style={styles.container}>
        <ImageBackground style={styles.backdrop} source = {{uri:`https://image.tmdb.org/t/p/original${img}`}}>
            <View style={styles.preview}>
                <Text style={styles.text}>{title}</Text>
                <View style = {styles.detail}>
                    <Text style={styles.text2}>{duration}</Text>
                    <Text style={styles.text2}>{rating}</Text>
                </View>
                <Text style={styles.text2}>{preview}</Text>
            </View>
        </ImageBackground>
    </View>
  )
}

export default ViewDetails

const styles = StyleSheet.create({
    container: {
      
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backdrop: {
        
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    preview: {
        width: '80%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 10,
        borderRadius: 10,
    },
    text: {
        fontSize: 25,
        fontWeight: 'normal',
        fontFamily: 'sans-serif',
        color: '#fff',
        bottom: 20
    },
    text2: {
        top: 10,
        fontSize: 16,
        fontWeight: 'normal',
        fontFamily: 'sans-serif',
        color: '#fff',
    },
    detail: {
        bottom:10,
        width:'90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    
})