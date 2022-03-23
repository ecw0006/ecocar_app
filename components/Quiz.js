import React, { Component } from 'react';
import { Button, View, Text,StyleSheet} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import BouncyCheckbox from "react-native-bouncy-checkbox";


export default class Quiz extends Component {
  render() {
    return (
      
      <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <View style={{width: '95%', paddingTop:50, paddingBottom:50}}>
        <Text style = {{color: 'black',fontSize: 25, textAlign:'center',paddingBottom: 10}}>What does ACC stand for?</Text>
        <View style= {{marginLeft: '35%'}}>
        <View style= {{paddingBottom: 5}}>
        <BouncyCheckbox
        
  size={25}
  fillColor="#FFFFFF"
  unfillColor="#FFFFFF"
  text="Automatic Cruise Control"
  textStyle={{textDecorationLine: "none"}}
  iconStyle={{ borderColor: "black" }}
  onPress={(isChecked) => {
    alert("Incorrect");
    
  }}
/>
</View>
<View style= {{paddingBottom: 5}}>
<BouncyCheckbox
  size={25}
  fillColor="FFFFFF"
  unfillColor="#FFFFFF"
  text="Automotive Crash Control"
  textStyle={{textDecorationLine: "none"}}
  iconStyle={{ borderColor: "black" }}
  onPress={(isChecked) => {
    alert("Incorrect");
  }}
/>
</View>
<View style= {{paddingBottom: 5}}>
<BouncyCheckbox
  size={25}
  fillColor="green"
  unfillColor="#FFFFFF"
  text="Adaptive Cruise Control"
  textStyle={{textDecorationLine: "none"}}
  iconStyle={{ borderColor: "black" }}
  onPress={(isChecked) => {
    alert("Correct");
  }}
/>
</View>

<BouncyCheckbox
  size={25}
  fillColor="#FFFFFF"
  unfillColor="#FFFFFF"
  text="A Cool Car"
  textStyle={{textDecorationLine: "none"}}
  iconStyle={{ borderColor: "black" }}
  onPress={(isChecked) => {
    alert("Incorrect");
  }}
/>
</View>


    
        </View>

        <View style={{width: '95%'}}>
        <Text style = {{color: 'black',fontSize: 25, textAlign:'center',paddingBottom: 10}}>What is the model of this years EcoCar?</Text>
        
        <View style= {{marginLeft: '35%'}}> 
        <View style= {{paddingBottom: 5}}>
        <BouncyCheckbox
  size={25}
  fillColor="green"
  unfillColor="#FFFFFF"
  text="Blazer"
  textStyle={{textDecorationLine: "none"}}
  iconStyle={{ borderColor: "black" }}
  onPress={(isChecked) => {
    alert("Correct");
    
  }}
/>
</View>
<View style= {{paddingBottom: 5}}>
<BouncyCheckbox
  size={25}
  fillColor="FFFFFF"
  unfillColor="#FFFFFF"
  text="Equinox"
  textStyle={{textDecorationLine: "none"}}
  iconStyle={{ borderColor: "black" }}
  onPress={(isChecked) => {
    alert("Incorrect");
  }}
/>
</View>
<View style= {{paddingBottom: 5}}>
<BouncyCheckbox
  size={25}
  fillColor="#FFFFFF"
  unfillColor="#FFFFFF"
  text="Trailblazer"
  textStyle={{textDecorationLine: "none"}}
  iconStyle={{ borderColor: "black" }}
  onPress={(isChecked) => {
    alert("Incorrect");
  }}
/>
</View>

<BouncyCheckbox
  size={25}
  fillColor="#FFFFFF"
  unfillColor="#FFFFFF"
  text="Tahoe"
  textStyle={{textDecorationLine: "none"}}
  iconStyle={{ borderColor: "black" }}
  onPress={(isChecked) => {
    alert("Incorrect");
  }}
/>
</View>
 

    
        </View>

      </View>




    )
  }
}