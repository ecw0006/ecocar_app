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
          <Text style = {{color: 'white',fontSize: 40}}>About Our Team!</Text>
        </View>
        <View View style={{position: 'absolute', top: 0, left: '15%', right: '15%', bottom: '35%', justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'left'}}>Project Manager: Clay Vincent</Text>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'left'}}>Instructors: Dr. Brian Woerner and Dr. Andrew Nix</Text>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'left'}}>Swimlane leaders: </Text>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'left'}}>HMI Team Members </Text>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'left'}}>App Development: Emily Waechter, Ty Biela, Kyle Breedlove, Dakota Lacy</Text>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'left'}}>Video:</Text>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'left'}}>Animation:</Text>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'left'}}>Testing:</Text>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'left'}}>Presentation:</Text>



        </View>
        <View style={{position:'absolute', bottom:'20%',left:'4%',width: '45%'}}>
          <Button color= "#EAAA00"
            title="Back"
            onPress={() => this.props.navigation.navigate('About Us')}
          />
          </View>
          
          
          
          
       </View>

    );
  }
}


