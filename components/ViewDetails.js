import { ImageBackground, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const ViewDetails = ({route}) => {
    const {title,img,preview,duration,rating} = route.params;
  return (
    <View style={styles.container}>
        <ImageBackground style={styles.backdrop}>
            <View style={styles.preview}>
                <Text style={styles.text}>{title}</Text>
                <View>
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
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backdrop: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    preview: {
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 10,
    },
    text: {
        fontSize: 30,
        fontWeight: 'normal',
        fontFamily: 'sans-serif',
        color: '#fff',
    },
    text2: {
        fontSize: 20,
        fontWeight: 'normal',
        fontFamily: 'sans-serif',
        color: '#fff',
    }
    
})