import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'

export default function Feed() {
    return(
        <View style={styles.feed}>
        <View style={styles.post}>
          <View style={styles.postheader}>
            <View style={styles.postheaderesquerda}>
              <Image style={styles.postheaderimg}source={require('../assets/images/piupiu.jpg')}/>
              <Text>Piu-Piu</Text>
            </View> 
            <FontAwesome5 name= "ellipsis-h" size={16} color="black"/>
          </View>
          <Image style={styles.postimg} aspectRatio={1.777} source={require('../assets/images/tinytoons.jpg')}/>
          <View style={styles.footer}>
            <FontAwesome5 style={styles.postfootericon} name= "heart" size={36} color="black"/>
            <FontAwesome5 style={styles.postfootericon} name= "comment" size={36} color="black"/>
          </View>
        </View>
        <View style={styles.post}>
          <View style={styles.postheader}>
            <View style={styles.postheaderesquerda}>
              <Image style={styles.postheaderimg}source={require('../assets/images/pernalonga.png')}/>
              <Text>Perna</Text>
            </View> 
            <FontAwesome5 name= "ellipsis-h" size={16} color="black"/>
          </View>
          <Image style={styles.postimg} aspectRatio={1.777} source={require('../assets/images/tinytoons3.jpg')}/>
          <View style={styles.footer}>
            <FontAwesome5 style={styles.postfootericon} name= "heart" size={36} color="black"/>
            <FontAwesome5 style={styles.postfootericon} name= "comment" size={36} color="black"/>
          </View>
        </View>
        <View style={styles.post}>
          <View style={styles.postheader}>
            <View style={styles.postheaderesquerda}>
              <Image style={styles.postheaderimg}source={require('../assets/images/taz.jpg')}/>
              <Text>Taz</Text>
            </View> 
            <FontAwesome5 name= "ellipsis-h" size={16} color="black"/>
          </View>
          <Image style={styles.postimg} aspectRatio={1.777} source={require('../assets/images/tinytoons2.jpg')}/>
          <View style={styles.footer}>
            <FontAwesome5 style={styles.postfootericon} name= "heart" size={36} color="black"/>
            <FontAwesome5 style={styles.postfootericon} name= "comment" size={36} color="black"/>
          </View>
        </View>
      </View>
    )
}
const styles = StyleSheet.create({
    feed: {
      flex: 1,
      backgroundColor: '#fff'
    },
    post: {
      backgroundColor: '#fff'
    },
    postheader:{
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 5,
    },
    postheaderesquerda: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    postheaderimg: {
      height: 50,
      width: 50,
      borderRadius: 25,
      margin: 5,
    },
    postimg: {
      width: '100%',
      height: undefined,
    },
    footer: {
      backgroundColor: '#fff',
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 5,
    },
    postfootericon: {
      padding: 5,
    },
  });