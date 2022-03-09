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
        <View View style={{position: 'absolute', top: 0, left: '15%', right: '15%', bottom: '30%', justifyContent: 'center', alignItems: 'center', marginTop: '30%'}}>
          <Text style = {{color: 'white',fontSize: 25, textAlign:'center',padding:5}}>Welcome to the West Virginia University Ecocar’s Vehicle and Adaptive Cruise Control

educational app!
</Text>
<Text style = {{color: 'white',fontSize: 25, textAlign:'center',padding:5}}>

The Ecocar Mobility Challenge is a multi-year, multi-university competition focusing on
innovation in the automotive industry, currently focusing transforming a 2019 Chevrolet Blazer

into a hybrid vehicle that utilizes Adaptive Cruise Control (ACC).
{"\n"}
{"\n"}
To learn more about the WVU EcoCar, use the buttons below to check out our Symbol Dictionary,
ACC Educational Video, or an interactive wheel to learn.
</Text>
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


