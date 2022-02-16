// Homescreen.js
import React, { Component } from 'react';
import {StyleSheet, Button, View, Text, ImageBackground, Image } from 'react-native';
import { textDecorationColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Homescreen extends Component {
 
  render() {
    return (
      <View >
        <ImageBackground source={require('../assets/blankBackground.png')} style ={{width: "100%", height: "120%"}}>
        
        

        <View View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: "65%", justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{width: 650, height: 200, }} source={require('../assets/ecocarlogo.png')}/>
        </View>
        <View View style={{position: 'absolute', top: 0, left: '15%', right: '15%', bottom: '45%', justifyContent: 'center', alignItems: 'center', marginTop: '30%'}}>
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
        <View style={{position:'absolute', bottom:'40%',left:'4%',width: '45%',backgroundColor:'#EAAA00',borderRadius: 20}}>
          <Button color= "#black"
            title="Symbol Dictionary"
            onPress={() => this.props.navigation.navigate('Symbol Dictionary')}
          />
          </View>
          <View style={{position:'absolute',bottom:'40%',right:'5%',width: '45%', backgroundColor: '#EAAA00', borderRadius: 20}}>
          <Button color= "black"
            title="EcoCar Video"
            onPress={() => this.props.navigation.navigate('EcoCar Video')}
          />
          </View>
          <View style={{position:'absolute',bottom:'35%',right:'30%',width: '40%', backgroundColor: '#EAAA00', borderRadius: 20}}>
          <Button 
            color= "#black"
            title="Interactive Wheel"
            onPress={() => this.props.navigation.navigate('Interactive Wheel')}
          />
          </View>
          </ImageBackground>
       </View>

    );
  }
}


