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
          <Text style = {{color: 'white',fontSize: 40}}>About Our Team!</Text>
        </View>
        <View View style={{position: 'absolute', top: 150, left: '10%', right: '0%', bottom: '0%', justifyContent:'center', alignItems: 'left'}}>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'left',lineHeight: 30}}><Text style={{fontWeight:"bold"}}>Project Manager:</Text> Clay Vincent{('\n')}</Text>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'left',lineHeight: 30}}><Text style={{fontWeight:"bold"}}>Communication Manager:</Text> Kaycee Kiser{('\n')} </Text>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'left',lineHeight: 30}}><Text style={{fontWeight:"bold"}}>Engineering Manager</Text> Colin Kellett{('\n')} </Text>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'left',lineHeight: 30}}><Text style={{fontWeight:"bold"}}>EcoCar Faculty:</Text> Dr. Brian Woerner and Dr. Andrew Nix{('\n')}</Text>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'left',lineHeight: 30}}><Text style={{fontWeight:"bold"}}>Swimlane Leads:</Text> </Text>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'left',lineHeight: 30}}><Text style={{fontWeight:"bold"}}>CAVs:</Text> Jared Diethorn and Zachary Flanigan</Text>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'left',lineHeight: 30}}><Text style={{fontWeight:"bold"}}>PCM:</Text> Holden Fraser and Dawson Dunnuck</Text>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'left',lineHeight: 30}}><Text style={{fontWeight:"bold"}}>PSI:</Text> James Keller, Colin Burns, and Colin Kellett</Text>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'left',lineHeight: 30}}><Text style={{fontWeight:"bold"}}>HMI:</Text> Clay Vincent{('\n')}</Text>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'left',lineHeight: 30}}><Text style={{fontWeight:"bold"}}>HMI Team:</Text> </Text>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'left',lineHeight: 30}}><Text style={{fontWeight:"bold"}}>App Development:</Text> Emily Waechter, Ty Biela, Kyle Breedlove, Dakota Lacy</Text>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'left',lineHeight: 30}}><Text style={{fontWeight:"bold"}}>Video:</Text> Mubarak Alzaid, Easton Thewes</Text>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'left',lineHeight: 30}}><Text style={{fontWeight:"bold"}}>Animation:</Text>Yaqoub Alsarraf ,Aqeel Bahman</Text>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'left',lineHeight: 30}}><Text style={{fontWeight:"bold"}}>Testing:</Text> Meshal Alfreeh, Eissa Alkhalifah, Mazin AlAmbouri, Mohammed Al Julandani</Text>
          <Text style = {{color: 'white',fontSize: 20, textAlign:'left',lineHeight: 30}}><Text style={{fontWeight:"bold"}}>Presentation:</Text> Matthew Adams and Jacob Liebau</Text>



        </View>
        
          
          
          
          
       </View>

    );
  }
}


