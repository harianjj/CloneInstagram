import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image style={styles.ufrngram}source={require('./assets/images/ufrngram.png')}/>
        <FontAwesome5 name= "paper-plane" size={24} color="black"/>
      </View>
      <View style={styles.stories}>
        <View style={styles.story}>
          <Image style={styles.imgstory}source={require('./assets/images/pernalonga.png')}/>
          <Text>Perna</Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imgstory}source={require('./assets/images/felicia.png')}/>
          <Text>Felicia</Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imgstory}source={require('./assets/images/taz.jpg')}/>
          <Text>Taz</Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imgstory}source={require('./assets/images/frajola.jpg')}/>
          <Text>Frajola</Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imgstory}source={require('./assets/images/patolino.jpg')}/>
          <Text>Patolino</Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imgstory}source={require('./assets/images/piupiu.jpg')}/>
          <Text>Piu-Piu</Text>
        </View>
        <View style={styles.story}>
          <Image style={styles.imgstory}source={require('./assets/images/jerry.jpg')}/>
          <Text>Jerry</Text>
        </View>
      </View>
      <View style={styles.feed}>
        <View style={styles.post}>
          <View style={styles.postheader}>
            <View style={styles.postheaderesquerda}>
              <Image style={styles.postheaderimg}source={require('./assets/images/piupiu.jpg')}/>
              <Text>Piu-Piu</Text>
            </View> 
            <FontAwesome5 name= "ellipsis-h" size={16} color="black"/>
          </View>
          <Image style={styles.postimg} aspectRatio={1.777} source={require('./assets/images/tinytoons.jpg')}/>
          <View style={styles.footer}>
            <FontAwesome5 style={styles.postfootericon} name= "heart" size={36} color="black"/>
            <FontAwesome5 style={styles.postfootericon} name= "comment" size={36} color="black"/>
          </View>
        </View>
        <View style={styles.post}>
          <View style={styles.postheader}>
            <View style={styles.postheaderesquerda}>
              <Image style={styles.postheaderimg}source={require('./assets/images/pernalonga.png')}/>
              <Text>Perna</Text>
            </View> 
            <FontAwesome5 name= "ellipsis-h" size={16} color="black"/>
          </View>
          <Image style={styles.postimg} aspectRatio={1.777} source={require('./assets/images/tinytoons3.jpg')}/>
          <View style={styles.footer}>
            <FontAwesome5 style={styles.postfootericon} name= "heart" size={36} color="black"/>
            <FontAwesome5 style={styles.postfootericon} name= "comment" size={36} color="black"/>
          </View>
        </View>
        <View style={styles.post}>
          <View style={styles.postheader}>
            <View style={styles.postheaderesquerda}>
              <Image style={styles.postheaderimg}source={require('./assets/images/taz.jpg')}/>
              <Text>Taz</Text>
            </View> 
            <FontAwesome5 name= "ellipsis-h" size={16} color="black"/>
          </View>
          <Image style={styles.postimg} aspectRatio={1.777} source={require('./assets/images/tinytoons2.jpg')}/>
          <View style={styles.footer}>
            <FontAwesome5 style={styles.postfootericon} name= "heart" size={36} color="black"/>
            <FontAwesome5 style={styles.postfootericon} name= "comment" size={36} color="black"/>
          </View>
        </View>

      </View>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },

  header: {
    flexDirection: 'row',
    padding: 10,
    height: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ufrngram: {
    height: 35,
    width: 160,
  },
  stories: {
    flexDirection: 'row',
    height:90,
    backgroundColor: '#fff'
  },
  story: {
    height: 90,
    width: 90,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imgstory: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
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
