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
        <Image style= {{width: '100%', height: '100%'}} source ={require("../assets/blankhomeScreenv2.png")}  />
        
        <View View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: "60%", justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{color: 'white',fontSize: 40}}>About Us!</Text>
        </View>
        <View View style={{position: 'absolute', top: 0, left: '15%', right: '15%', bottom: '35%', justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'justify'}}>The EcoCar Mobility Challenge is a 4 year compitition between universities accross the country. The goal of EcoCar is to transform a 2019 Chevrolet Blazer into a hybrid vehicle featuring autonomous vehicle capabilities including Adaptive Cruise Control.</Text>
        </View>
        <View style={{position:'absolute', bottom:'20%',left:'25%',width: '50%',backgroundColor: '#EAAA00', borderRadius: 20}}>
          <Button color= "black"
            title="About the Car"
           onPress={() => this.props.navigation.navigate('About the Car')}
          />
          </View>
          <View style={{position:'absolute', bottom:'15%',left:'25%',width: '50%',backgroundColor: '#EAAA00', borderRadius: 20}}>
          <Button color= "black"
            title="About our Team"
            onPress={() => this.props.navigation.navigate('About our Team')}
          />
          </View>
        
          
       </View>

    );
  }
}


