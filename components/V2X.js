import React, { Component } from 'react';
import { Button, View, Text, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Webview } from 'react-native-webview';

export default class V2X extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        
       
      

       <Image style= {{width: '100%', height: '100%'}} source ={require("../assets/blankhomeScreenv2.png")}/>
        
        
        <View View style = {{position: 'absolute', top: '-50%', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',}}>

        <Text style={{ fontWeight: 'bold', color: '#EAAA00', fontSize: 45, paddingBottom: 40 }}>
         V2X Technology
        </Text>
        
        </View>
        <View style ={{position: 'absolute', top: '30%', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EAAA00', height: "44%", width: "100%",}}>

        <YoutubePlayer
        height = '93%'
        width = '97%'
        videoId = {'_CTExwyr3Ig'}
        />
                </View>

        

        
        <View style ={{position: 'absolute', top: '74%', left: "3%",  bottom: 0, justifyContent: 'center', alignItems: 'center',  height: '10%', width: "95%"}}>
        
       <Text style = {{color: '#EAAA00', fontSize: 19}}>
           V2X technology allows our vehicle to communicate with road infrastructure. This allows for features such as the one seen in the video above,
           where our vehicle is able to communicate with the traffic light to know when to stop.
       </Text>
         
        </View>
      </View>
      
    )
  }
}