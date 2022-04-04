//Interactive Wheel.js
import React, { Component } from 'react';
import { Button, View, Text, Image, ImageBackground } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet, StyleSheetProperties, TouchableOpacity } from 'react-native';
//import Modal from 'react-native-modal';
//import { useState } from 'react/cjs/react.development';cd Des

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
    
    
  },
});

// const [isModalVisible, setModalVisible] = useState(false);

// const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };

export default class InteractiveWheel extends Component {
  render() {
    return (
      
      <View style={styles.container}>
        <ImageBackground source={require("../assets/blankhomeScreenv2.png")} style= {{width: '100%', height: '100%'}}>
        <ImageBackground style= {{width: 800, height: 800, justifyContent: "center", bottom: '-15%'}} source ={require("../assets/Wheel_final.png")}>
        
        <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("This is the RES button")}}>
        <Image style= {{resizeMode:'contain',position: 'absolute', width: 142, height: 142, left: 108, top: 298}} source ={require("../assets/res1.png")}  />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("This is the SET button")}}>
        <Image style= {{resizeMode:'contain',position: 'absolute', width: 142, height: 142, left: 111.2, top: 365}} source ={require("../assets/set1.png")}  />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("Use this button to turn on and off crusie control")}}>
        <Image style= {{resizeMode:'contain',position: 'absolute', width: 88, height: 88, left: 127, top: 351}} source ={require("../assets/buttons1.png")}  />
        </TouchableOpacity>
        </View>
       
       
         
        </ImageBackground>
    </ImageBackground>
        
      </View>
    )
  }
}