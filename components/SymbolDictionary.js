import React, { Component } from 'react';
import { Button, View, Text, ScrollView, Image, ImageBackground } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class SymbolDictionary extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, backgroundColor:"#002855", alignItems: 'center', justifyContent: 'space-evenly', paddingTop: 25, paddingHorizontal: 10}}>
          <ImageBackground source={require('../assets/blankBackground.png')} style ={{width: "100%", height: "100%"}}>
          <Image style={{width: 350, height: 200 }} source={require('../assets/CheckEngine.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>This light is part of the vehicle’s
                emission control on-board
                diagnostic system. If this light is on
                while the engine is running, a
                malfunction has been detected and
                the vehicle may require service</Text>
          <Image style={{width: 350, height: 200 }} source={require('../assets/CheckEngine.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>This light is part of the vehicle’s
                emission control on-board
                diagnostic system. If this light is on
                while the engine is running, a
                malfunction has been detected and
                the vehicle may require service</Text>
                <Image style={{width: 350, height: 200 }} source={require('../assets/CheckEngine.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>This light is part of the vehicle’s
                emission control on-board
                diagnostic system. If this light is on
                while the engine is running, a
                malfunction has been detected and
                the vehicle may require service</Text>
          <Image style={{width: 350, height: 200 }} source={require('../assets/CheckEngine.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>This light is part of the vehicle’s
                emission control on-board
                diagnostic system. If this light is on
                while the engine is running, a
                malfunction has been detected and
                the vehicle may require service</Text>  
          </ImageBackground>
        </View>
      </ScrollView>
    )
  }
}