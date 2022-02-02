import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Webview } from 'react-native-webview';

export default class SymbolDictionary extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        
        <YoutubePlayer
        height =  {400}
        width = {400}
        videoId = {'laW8rtUEMyc'}
        />


      </View>
    )
  }
}