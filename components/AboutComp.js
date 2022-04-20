// Homescreen.js
import React, { Component } from 'react';
import {StyleSheet, Button, View, Text, Image } from 'react-native';
import { textDecorationColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class AboutUs extends Component {
 
  render() {
    return (
      <View >
        <Image style= {{width: '100%', height: '110%'}} source ={require("../assets/blankhomeScreenv2.png")}  />
        
        <View View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: "60%", justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{color: 'white',fontSize: 40}}>About the Competition!</Text>
        </View>
        <View View style={{position: 'absolute', top: 0, left: '15%', right: '15%', bottom: '35%', justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'justify'}}>This page is still under development</Text>
        </View>
       
          
          
          
          
       </View>

    );
  }
}


