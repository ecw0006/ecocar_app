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
        <Image style= {{width: '100%', height: '110%'}} source ={require("../assets/blankBackground.png")}  />
        
        <View View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: "70%", justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{color: 'white',fontSize: 40}}>About Us!</Text>
        </View>
        <View View style={{position: 'absolute', top: 0, left: '15%', right: '15%', bottom: '35%', justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'justify'}}>The EcoCar Mobility Challenge is a 4 year compitition between 11 universities. The goal of EcoCar is to transform a 2019 Chevrolet Blazer into a hybrid vehicle featuring autonomous vehicle capabilities including Adaptive Cruise Control</Text>
        </View>
        <View style={{position:'absolute', bottom:'20%',left:'4%',width: '45%'}}>
          <Button color= "#EAAA00"
            title="About our Car"
           // onPress={() => this.props.navigation.navigate('Symbol Dictionary')}
          />
          </View>
          <View style={{position:'absolute',bottom:'20%',right:'5%',width: '45%'}}>
          <Button color= "#EAAA00"
            title="About our Team"
          //  onPress={() => this.props.navigation.navigate('EcoCar Video')}
          />
          </View>
          
          
       </View>

    );
  }
}


