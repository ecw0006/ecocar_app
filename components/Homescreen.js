// Homescreen.js
import React, { Component } from 'react';
import {StyleSheet, Button, View, Text, Image } from 'react-native';
import { textDecorationColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Homescreen extends Component {
 
  render() {
    return (
      <View >
        <Image style= {{width: '100%', height: '110%'}} source ={require("../assets/blankBackground.png")}  />
        
        <View View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: "70%", justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{color: 'white',fontSize: 40}}>Welcome!</Text>
        </View>
        <View View style={{position: 'absolute', top: 0, left: '15%', right: '15%', bottom: '35%', justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'justify'}}>This is where we will have the introduction message and say the next step would be to watch our training video or review the symbol dictionary.</Text>
        </View>
        <View style={{position:'absolute', bottom:'20%',left:'4%',width: '45%'}}>
          <Button color= "#EAAA00"
            title="Symbol Dictionary"
            onPress={() => this.props.navigation.navigate('Symbol Dictionary')}
          />
          </View>
          <View style={{position:'absolute',bottom:'20%',right:'5%',width: '45%'}}>
          <Button color= "#EAAA00"
            title="EcoCar Video"
            onPress={() => this.props.navigation.navigate('EcoCar Video')}
          />
          </View>
          <View style={{position:'absolute',bottom:'12%',right:'30%',width: '40%'}}>
          <Button color= "#EAAA00"
            title="Interactive Wheel"
            onPress={() => this.props.navigation.navigate('Interactive Wheel')}
          />
          </View>
          
       </View>

    );
  }
}


