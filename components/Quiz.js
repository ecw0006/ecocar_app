import React, { Component } from 'react';
import { Button, View, Text,StyleSheet, ScrollView, ImageBackground} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Alert } from 'react-native';

export default class Quiz extends Component {
  
  render() {
    
    return (
      <View>
      <ImageBackground source={require('../assets/blankhomeScreenv2.png')} style ={{width: "100%", height: "100%"}}>
       <View style={{height: 838, top: 200}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#00000000'}}>
        

          <View style={{width: '95%', paddingTop:50, paddingBottom:50,}}>
            <Text style = {{color: '#FFFFFF',fontSize: 25, textAlign:'center',paddingBottom: 10}}>What is ACC?</Text>
            <View style= {{marginLeft: '20%'}}>
              <View style= {{paddingBottom: 5,}}>
              <BouncyCheckbox
                size={25}
                fillColor="#FFFFFF"
                unfillColor="#FFFFFF"
                text="Adaptive Cruise Control is a system that accelerates only."
                textStyle={{textDecorationLine: "none"}}
                iconStyle={{ borderColor: "#FFFFFF" }}
                onPress={(isChecked) => {
                  Alert.alert("Incorrect","This is partially correct, but ACC has more than just one function.");
              }}
              />
              </View>

              <View style= {{paddingBottom: 5}}>
              <BouncyCheckbox
                size={25}
                fillColor="FFFFFF"
                unfillColor="#FFFFFF"
                text="Adaptive Cruise Control is a system that breaks suddenly."
                textStyle={{textDecorationLine: "none"}}
                iconStyle={{ borderColor: "#FFFFFF" }}
                onPress={(isChecked) => {
                  Alert.alert("Incorrect","This is partially correct, but ACC has more than just one function.");
                }}
              />
              </View>

              <View style= {{paddingBottom: 5}}>
              <BouncyCheckbox
                size={25}
                fillColor="green"
                unfillColor="#FFFFFF"
                text="Adaptive Cruise Control is a system that automatically accelerates or breaks."
                textStyle={{textDecorationLine: "none"}}
                iconStyle={{ borderColor: "#FFFFFF" }}
                onPress={(isChecked) => {
                  Alert.alert("Correct", "Good Job!");
                }}
              />
              </View>
              
              <View>
              <BouncyCheckbox
                size={25}
                fillColor="#FFFFFF"
                unfillColor="#FFFFFF"
                text="None of the Above."
                textStyle={{textDecorationLine: "none"}}
                iconStyle={{ borderColor: "#FFFFFF" }}
                onPress={(isChecked) => {
                  Alert.alert("Incorrect","One of the answers above is correct.");
                }}
              />
              </View>
            </View>
          </View>

          <View style={{width: '95%', paddingTop:50, paddingBottom:50,}}>
          <Text style = {{color: '#FFFFFF',fontSize: 25, textAlign:'center',paddingBottom: 10}}>How do you turn on Cruise Control?</Text>
    
            <View style= {{marginLeft: '20%',}}> 
          <View style= {{paddingBottom: 5}}>
          <BouncyCheckbox
    size={25}
    fillColor="green"
    unfillColor="#FFFFFF"
    text="Press the button on the steering wheel labeled Cruise Control."
    textStyle={{textDecorationLine: "none"}}
    iconStyle={{ borderColor: "#FFFFFF" }}
    onPress={(isChecked) => {
      Alert.alert("Correct", "Good Job!");
      
    }}
  />
  </View>
  <View style= {{paddingBottom: 5}}>
  <BouncyCheckbox
    size={25}
    fillColor="FFFFFF"
    unfillColor="#FFFFFF"
    text="Insert the Cruise Control disk into the CD player."
    textStyle={{textDecorationLine: "none"}}
    iconStyle={{ borderColor: "#FFFFFF" }}
    onPress={(isChecked) => {
      Alert.alert("Incorrect","Not quite, there is a button you press to turn on ACC.");
    }}
  />
  </View>
  <View style= {{paddingBottom: 5}}>
  <BouncyCheckbox
    size={25}
    fillColor="#FFFFFF"
    unfillColor="#FFFFFF"
    text="Tap the gas petal 3 times."
    textStyle={{textDecorationLine: "none"}}
    iconStyle={{ borderColor: "#FFFFFF" }}
    onPress={(isChecked) => {
      Alert.alert("Incorrect","Not quite, there is a button you press to turn on ACC.");
    }}
  />
  </View>

  <BouncyCheckbox
    size={25}
    fillColor="#FFFFFF"
    unfillColor="#FFFFFF"
    text="None of the above."
    textStyle={{textDecorationLine: "none"}}
    iconStyle={{ borderColor: "#FFFFFF" }}
    onPress={(isChecked) => {
      Alert.alert("Incorrect","One of the above questions is correct.");
    }}
  />
  </View>
  


      
          </View>

          <View style={{width: '95%', paddingTop:50, paddingBottom:50,}}>
          <Text style = {{color: '#FFFFFF',fontSize: 25, textAlign:'center',paddingBottom: 10}}>In what situations should ACC be used?</Text>
          
          <View style= {{marginLeft: '20%',}}> 
          
  <View style= {{paddingBottom: 5}}>
  <BouncyCheckbox
    size={25}
    fillColor="FFFFFF"
    unfillColor="#FFFFFF"
    text="In heavy traffic."
    textStyle={{textDecorationLine: "none"}}
    iconStyle={{ borderColor: "#FFFFFF" }}
    onPress={(isChecked) => {
      Alert.alert("Incorrect","Not Quite, The ACC should only be used in safe situations.");
    }}
  />
  </View>
  <View style= {{paddingBottom: 5}}>
  <BouncyCheckbox
    size={25}
    fillColor="#FFFFFF"
    unfillColor="#FFFFFF"
    text="In the rain and snow."
    textStyle={{textDecorationLine: "none"}}
    iconStyle={{ borderColor: "#FFFFFF" }}
    onPress={(isChecked) => {
      Alert.alert("Incorrect","Not Quite, The ACC should only be used in safe situations.");
    }}
  />
  </View>

  <View style= {{paddingBottom: 5}}>
          <BouncyCheckbox
    size={25}
    fillColor="green"
    unfillColor="#FFFFFF"
    text="Only when roads are clear and in good condition."
    textStyle={{textDecorationLine: "none"}}
    iconStyle={{ borderColor: "#FFFFFF" }}
    onPress={(isChecked) => {
      Alert.alert("Correct", "Good Job!");
      
    }}
  />
  </View>

  <BouncyCheckbox
    size={25}
    fillColor="#FFFFFF"
    unfillColor="#FFFFFF"
    text="You can use it any time."
    textStyle={{textDecorationLine: "none"}}
    iconStyle={{ borderColor: "#FFFFFF" }}
    onPress={(isChecked) => {
      Alert.alert("Incorrect","Not Quite, There are certain situations that are unfavorable for ACC.");
    }}
  />
  </View>
  


      
          </View>

          <View style={{width: '95%', paddingTop:50, paddingBottom:50,}}>
          <Text style = {{color: '#FFFFFF',fontSize: 25, textAlign:'center',paddingBottom: 10}}>Why is ACC useful?</Text>
          
          <View style= {{marginLeft: '20%',}}> 
         
  <View style= {{paddingBottom: 5}}>
  <BouncyCheckbox
    size={25}
    fillColor="FFFFFF"
    unfillColor="#FFFFFF"
    text="It does not require a driver in the car to operate."
    textStyle={{textDecorationLine: "none"}}
    iconStyle={{ borderColor: "#FFFFFF" }}
    onPress={(isChecked) => {
      Alert.alert("Incorrect","Not quite, the driver should always be present in the driver seat while the vehicle is operating.");
    }}
  />
  </View>

  <View style= {{paddingBottom: 5}}>
          <BouncyCheckbox
    size={25}
    fillColor="green"
    unfillColor="#FFFFFF"
    text="Its a safe system that maintains distance from the vehicle in front of you."
    textStyle={{textDecorationLine: "none"}}
    iconStyle={{ borderColor: "#FFFFFF" }}
    onPress={(isChecked) => {
      Alert.alert("Correct", "Good Job!");
      
    }}
  />
  </View>

  <View style= {{paddingBottom: 5}}>
  <BouncyCheckbox
    size={25}
    fillColor="#FFFFFF"
    unfillColor="#FFFFFF"
    text="It works without fuel in the car."
    textStyle={{textDecorationLine: "none"}}
    iconStyle={{ borderColor: "#FFFFFF" }}
    onPress={(isChecked) => {
      Alert.alert("Incorrect","Not Quite, ACC is more focused on safety.");
    }}
  />
  </View>

  <BouncyCheckbox
    size={25}
    fillColor="#FFFFFF"
    unfillColor="#FFFFFF"
    text="It will teach people how to drive."
    textStyle={{textDecorationLine: "none"}}
    iconStyle={{ borderColor: "#FFFFFF" }}
    onPress={(isChecked) => {
      Alert.alert("Incorrect","Not Quite, ACC is more focused on safety rather than teaching.");
    }}
  />
  </View>
  


      
          </View>

          <View style={{width: '95%', paddingTop:50, paddingBottom:50,}}>
          <Text style = {{color: '#FFFFFF',fontSize: 25, textAlign:'center',paddingBottom: 10}}>Pressing down on the break will deactivate ACC.</Text>
          
          <View style= {{marginLeft: '20%',}}> 
          <View style= {{paddingBottom: 5}}>
          <BouncyCheckbox
    size={25}
    fillColor="green"
    unfillColor="#FFFFFF"
    text="True"
    textStyle={{textDecorationLine: "none"}}
    iconStyle={{ borderColor: "#FFFFFF" }}
    onPress={(isChecked) => {
      Alert.alert("Correct");
      
    }}
  />
  </View>
  <View style= {{paddingBottom: 5}}>
  <BouncyCheckbox
    size={25}
    fillColor="FFFFFF"
    unfillColor="#FFFFFF"
    text="False"
    textStyle={{textDecorationLine: "none"}}
    iconStyle={{ borderColor: "#FFFFFF" }}
    onPress={(isChecked) => {
      Alert.alert("Incorrect");
    }}
  />
  </View>
  

  
  </View>
  


      
          </View>

          
        </View>

        {/* <View style={{flexDirection:'row',backgroundColor:'red', height:250,padding:5}}>
          <View style={{backgroundColor:'blue', flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text>Symbol</Text>
          </View>
          <View style={{backgroundColor:'green',flex:2,alignItems:'center',justifyContent:'center'}}>
            <Text>this is about the acc</Text>
          </View>
        </View>

        <View style={{flexDirection:'row',backgroundColor:'red', height:250,padding:5}}>
          <View style={{backgroundColor:'blue', flex:1}}>
            <Text>asdfs</Text>
          </View>
          <View style={{backgroundColor:'green',flex:2}}>

          </View>
        </View>

        <View style={{flexDirection:'row',backgroundColor:'red', height:250,padding:5}}>
          <View style={{backgroundColor:'blue', flex:1}}>
            <Text>asdfs</Text>
          </View>
          <View style={{backgroundColor:'green',flex:2}}>

          </View>
        </View> */}
  
      </ScrollView>
      </View>
      </ImageBackground>
      </View>


    )
    this.forceUpdate();
  }
}