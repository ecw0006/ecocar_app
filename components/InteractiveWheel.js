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
    height: '100%'
  },
  image: {
    flex: 1,
  width: '100%',
  height: '100%',
  resizeMode: 'contain'
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
    shadowRadius: 0,
    shadowOpacity: 0.35,
  },
});


export default class InteractiveWheel extends Component {
  render() {
    return (
      
      <View style={styles.container}>
        <ImageBackground source={require("../assets/blankBackground.png")} style= {{width: '100%', height: '110%'}}>
        <ImageBackground style= {{width: '100%', height: '80%', justifyContent: "center", bottom: '-15%'}} source ={require("../assets/BlazerWheel.png")}>
        <View style={styles.container}>
         <TouchableOpacity style={styles.button} onPress={()=>{alert("This is the RES button")}}>
        <Image style= {{width: 120.56, height: 41.1,resizeMode: 'stretch',top: '841%',left: '19.8%'}} source ={require("../assets/RES2.png")}  />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("This is the SET button")}}>
        <Image style= {{width: 126.15, height: 82.65,resizeMode: 'stretch', top: '405%',left: '19.5%'}} source ={require("../assets/SET.png")}  />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("BEEP")}}>
        <Image style= {{buttonRadius:0, width: 256.96, height: 270.1,resizeMode: 'stretch', top: '74.9%',left: '34.2%'}} source ={require("../assets/horn.png")}  />
        </TouchableOpacity>
        </View>
        </ImageBackground>
    </ImageBackground>
        
      </View>
    )
  }
}