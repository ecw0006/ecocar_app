import React, { Component } from 'react';
import { Button, View, Text, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Webview } from 'react-native-webview';

export default class VideoScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        
       
      

       <Image style= {{width: '100%', height: '100%'}} source ={require("../assets/test.png")}/>
        <View View style = {{position: 'absolute', top: '-50%', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',}}>

        <Text style={{ fontWeight: 'bold', color: '#EAAA00', fontSize: 30, paddingBottom: 40 }}>
         Safety Module Video
        </Text>
        
        </View>
        <View style ={{position: 'absolute', top: '30%', left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EAAA00', height: '30%', width: "100%",}}>

        <YoutubePlayer
        height = '94%'
        width = '97%'
        videoId = {'g5d_xUb0US8'}
        />
                </View>

        

        
        <View style ={{position: 'absolute', top: '65%', left: '37.5%', right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EAAA00', height: '5%', width: "25%", borderRadius: '25%'}}>
        
        <Button 
        title="Take Quiz"
        color= 'black'
        onPress={() => this.props.navigation.navigate('Quiz')}
         />
         
        </View>
      </View>
      
    )
  }
}