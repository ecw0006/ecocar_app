//Interactive Wheel.js
import React, { Component } from 'react';
import { Button, View, Text, Image, ImageBackground } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet, StyleSheetProperties, TouchableOpacity } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: '100%', 
    height: '110%'
  },
  image: {
    flex: 1,
   // resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
  button: {
    
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
});


export default class InteractiveWheel extends Component {
  render() {
    return (
      
      <View style={styles.container}>
        <ImageBackground source={require("../assets/blankBackground.png")} style= {{width: '100%', height: '110%'}}>
        <ImageBackground style= {{width: '100%', height: '70%', justifyContent: "center", bottom: '-20%'}} source ={require("../assets/BlazerWheel.png")}>
        {/* <View style={styles.container}> */}
         {/* <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}> */}
        {/* <Image style= {{width: '18%', height: '28%',top: '118%',left: '18.5%'}} source ={require("../assets/button2.png")}  /> */}
        {/* </TouchableOpacity> */}
        {/* </View> */}
        </ImageBackground>
    </ImageBackground>
        
      </View>
    )
  }
}