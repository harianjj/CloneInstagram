import React from 'react';
import { StyleSheet, Text, Image, View , FlatList} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'

export default function Feed() {

  const feed = [
    {
      id: 1,
      nome: 'Piu-Piu',
      imgPerfil: require('../assets/images/piupiu.jpg'),
      img: require('../assets/images/tinytoons.jpg'),
      aspectRatio: 1.777,
    },
    {
      id: 2,
      nome: 'Perna',
      imgPerfil: require('../assets/images/pernalonga.png'),
      img: require('../assets/images/tinytoons3.jpg'),
      aspectRatio: 1.777,
    },
    {
      id: 3,
      nome: 'Taz',
      imgPerfil: require('../assets/images/taz.jpg'),
      img: require('../assets/images/tinytoons2.jpg'),
      aspectRatio: 1.777,
    },
  ]
  function renderItem({ item }) {
    return <View style={styles.post}>
    <View style={styles.postheader}>
      <View style={styles.postheaderesquerda}>
        <Image style={styles.postheaderimg}source={item.imgPerfil}/>
        <Text>{item.nome}</Text>
      </View> 
      <FontAwesome5 name= "ellipsis-h" size={16} color="black"/>
    </View>
    <Image style={styles.postimg} aspectRatio={item.aspectRatio} source={item.img}/>
    <View style={styles.footer}>
      <FontAwesome5 style={styles.postfootericon} name= "heart" size={36} color="black"/>
      <FontAwesome5 style={styles.postfootericon} name= "comment" size={36} color="black"/>
    </View>
  </View>       
  }
    return(
      <View style={styles.feed}>
        <FlatList
          data = {feed}
          renderItem = {renderItem}
          keyExtractor={item => item.id}
        
      />  
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