import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SettingsScreen from './components/SettingsScreen';
import Homescreen from './components/Homescreen';
import SymbolDictionary from './components/SymbolDictionary';




const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Homescreen} />
        <Drawer.Screen name="Symbol Dictionary" component={SymbolDictionary} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
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