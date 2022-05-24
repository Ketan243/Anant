import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <View style={styles.userContainer}>
          <Image style={styles.image} source={{uri: 'https://picsum.photos/200/300?random=1'}} />
          <View style={{marginLeft:10}}>
            <Text style={styles.name}>Hi, Ben Cline</Text>
            <Text style={styles.desc}>Welcome to medTech</Text>
          </View>
      </View>
      <View>
        <View style={styles.list}>
            <Icon name="ios-person-outline" size={25} color="black" />
            <View style={styles.list2}><Text style={styles.text}>My Account</Text>
            <Icon name="chevron-forward-outline" size={25} color="black" />
            </View>
        </View>
        <View style={styles.list}>
            <Icon name="ios-notifications-outline" size={25} color="black" />
            <View style={styles.list2}><Text style={styles.text}>Doctors for Consultation</Text>
            <Icon name="chevron-forward-outline" size={25} color="black" />
            </View>
        </View>
        <View style={styles.list}>
            <Icon name="ios-document-outline" size={25} color="black" />
            <View style={styles.list2}><Text style={styles.text}>My Orders</Text>
            <Icon name="chevron-forward-outline" size={25} color="black" />
            </View>
        </View>
        <View style={styles.list}>
            <Icon name="ios-bookmark-outline" size={25} color="black" />
            <View style={styles.list2}><Text style={styles.text}>Hospitals</Text>
            <Icon name="chevron-forward-outline" size={25} color="black" />
            </View>
        </View>
        <View style={styles.list}>
            <Icon name="ios-help-outline" size={25} color="black" />
            <View style={styles.list2}><Text style={styles.text}>FAQ</Text>
            <Icon name="chevron-forward-outline" size={25} color="black" />
            </View>
        </View>
        <View style={styles.list}>
            <Icon name="ios-settings-outline" size={25} color="black" />
            <View style={styles.list2}><Text style={styles.text}>Security Documents</Text>
            <Icon name="chevron-forward-outline" size={25} color="black" />
            </View>
        </View>
        
      </View>

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'times',
        marginTop: 10,
        marginBottom: 20,
    },
    image: {
        width:60,
        height:60,
        borderRadius:150,
        borderWidth:3,
        borderColor:'#FFFAFA',
        resizeMode:'cover',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'times',
    },
    desc: {
        fontSize: 15,
        color:'gray',
        fontFamily: 'times',
    },
    list: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 10,
    },
    list2: {
        height:40,
        marginHorizontal: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#eaeaea',
    },
    text: {
        fontSize: 15,
        color: 'black',
        fontFamily: 'times',
    },

})