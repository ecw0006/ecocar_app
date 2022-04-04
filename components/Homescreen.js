// Homescreen.js
import React, { Component } from 'react';
import {StyleSheet, Button, View, Text, ImageBackground, Image } from 'react-native';
import { textDecorationColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: '100%', 
    height: '100%'
  },
  image: {
    flex: 1,
  width: '100%',
  height: '100%',
  resizeMode: 'contain'
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
  button: {
    
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 0,
    shadowOpacity: 0.35,
  },
});

export default class Homescreen extends Component {
 
  render() {
    return (
      <View>
        <ImageBackground source={require('../assets/homeScreenv2.png')} style ={{width: "100%", height: "100%"}}>
        


        <View View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: "57%", justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{width: 440, height: 135, resizeMode: 'stretch'}} source={require('../assets/EcoCarLogo_new.png')}/>
        </View>

        <View View style={{position: 'absolute', top: 0, left: '15%', right: '15%', bottom: '30%', justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'center'}}>Welcome to the WVU EcoCar Mobility Challenge Educational App. Here you can learn about our vehicle's Adaptive Cruise Control through our video and quiz as well as general information about our vehicle and its symbol dictionary.</Text>

        </View>
        <View style={{position:'absolute', bottom:'10%',left:'3%',width: '45%',backgroundColor:'#EAAA00',borderRadius: 20}}>
          <Button color= "black"
            title="Symbol Dictionary"
            onPress={() => this.props.navigation.navigate('Symbol Dictionary')}
          />
          </View>
          <View style={{position:'absolute',bottom:'10%',right:'4%',width: '45%', backgroundColor: '#EAAA00', borderRadius: 20}}>
          <Button color= "black"
            title="EcoCar Video"
            onPress={() => this.props.navigation.navigate('EcoCar Video')}
          />
          </View>
          <View style={{position:'absolute',bottom:'15%',right:'30%',width: '40%', backgroundColor: '#EAAA00', borderRadius: 20}}>
          <Button 
            color= "black"
            title="Interactive Wheel"
            onPress={() => this.props.navigation.navigate('Interactive Wheel')}
          />
          </View>
          </ImageBackground>
       </View>

    );
  }
}


