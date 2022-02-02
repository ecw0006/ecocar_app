import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SettingsScreen from './components/SettingsScreen';
import Homescreen from './components/Homescreen';
import SymbolDictionary from './components/SymbolDictionary';
import VideoScreen from './components/VideoScreen';

//test feature branch again again again again



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Homescreen} />
        <Drawer.Screen name="Symbol Dictionary" component={SymbolDictionary} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="EcoCar Video" component={VideoScreen} />
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