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
          <Text style = {{color: 'white',fontSize: 40}}>About Our Car!</Text>
        </View>
        <View View style={{position: 'absolute', top: 150, left: '15%', right: '15%', bottom: '10%', justifyContent: 'center', alignItems: 'left'}}>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'left'}}>We modified a 2019 Chevrolet Blazer into a hybrid vehicle featuring our own Adaptive Cruise Control system.{('\n')}</Text>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'left'}}>To transform our vehicle into a hybrid vehicle we added an HEV 4 battery pack with a Manga eAWD motor paired with an inverter to become a P4 hybrid vehicle meaning it has 4 wheel drive capabilities using the combustion engine for the front axle and the electric motor powering the rear.{('\n')}</Text>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'left'}}>We also replaced the stock engine with a smaller, 2.5 liter engine and added coolant lines to manage the temperature of our added components.{('\n')}</Text>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'left'}}>We were tasked with making the vehicle Level 2 SAE autonomous, meaning the vehicle can control both steering and accelerating/decelerating. To do this, we added a front radar (MRR) from Bosch and an Intel Mobileye Camera 630.{('\n')}</Text>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'left'}}>To complete these tasks, we added a MicroAutobox from DSAPCE along with an Intel IoT Tank for our main processing units.</Text>

        </View>
        <View style={{position:'absolute', bottom:'15%',left:'25%',width: '50%',backgroundColor: '#EAAA00', borderRadius: 20}}>
          <Button color= "black"
            title="V2X Technology"
            onPress={() => this.props.navigation.navigate('V2X')}
          />
          </View>
          
          
          
          
       </View>

    );
  }
}


