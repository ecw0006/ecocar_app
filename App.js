import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import InteractiveWheel from './components/InteractiveWheel';
import Homescreen from './components/Homescreen';
import SymbolDictionary from './components/SymbolDictionary';
import VideoScreen from './components/VideoScreen';
import Quiz from './components/Quiz';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { setStatusBarHidden } from 'expo-status-bar';

//test feature branch again again again again



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Homescreen}options={{
          
          drawerIcon: () => (
            <AntDesign
              name="home"
              size={20}
              color="#eaaa00"
            />
          )
        }} />
        <Drawer.Screen name="Symbol Dictionary" component={SymbolDictionary} options={{
          
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="car-brake-alert"
              size={20}
              color="#eaaa00"
            />
          )
        }}  />
        <Drawer.Screen name="Interactive Wheel" component={InteractiveWheel} options={{
          
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="steering"
              size={20}
              color="#eaaa00"
            />
          )
        }} />
        <Drawer.Screen name="EcoCar Video" component={VideoScreen} options={{
          
          drawerIcon: () => (
            <MaterialIcons
              name="ondemand-video"
              size={20}
              color="#eaaa00"
            />
          )
        }}  />
        <Drawer.Screen name="Quiz" component={Quiz} options={{
          drawerItemStyle:{
            height: 0
          }
        }}  />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
//const AppNavigator = createDrawerNavigator({
 // Home: {
 //   screen: Homescreen
 // },
  //Contact: {
  //  screen: ContactScreen
  //},
 // About: {
 //   screen: Aboutscreen
 // }
//},{
//        initialRouteName: "Home"
//});

//const AppContainer = createAppContainer(AppNavigator);

//const styles = StyleSheet.create({
  //container: {
    //flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
 // },
//});