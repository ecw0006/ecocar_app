// Homescreen.js
import React, { Component } from 'react';
import {ImageBackground, Button, View, Text, Image } from 'react-native';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class Homescreen extends Component {
 
 //        <View style = {{position: 'absolute', top: 10, left: 10, width: 50, height: 50, backgroundColor: 0xEAAA00}}/>
//<View style = {{flex: 1, backgroundColor:0x005EB8, justifyContent:'center', alignItems:'center'}}>
  render() {
    return (
      <View >
        <Image style= {{width: '100%', height: '100%'}} source ={require("../assets/homeBackground.png")}  />
        <View style = {{position: 'absolute', top: 0, left: 0, width: 50, height: 50, backgroundColor: 0xEAAA00}}/>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Welcome!</Text>
          <Text>Home Screen</Text>

          <Button
            title="Settings"
            onPress={() => this.props.navigation.navigate('Settings')}
          />
          <Button
            title="Symbol Dictionary"
            onPress={() => this.props.navigation.navigate('Symbol Dictionary')}
          />
          </View>
          
       </View>

    );
  }
}