import * as React from 'react';
import { Button, View,TouchableOpacity, IconButton, Text } from 'react-native';
import { createDrawerNavigator} from '@react-navigation/drawer';
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
import AboutUs from './components/AboutUs';
import AboutCar from './components/AboutCar';
import AboutComp from './components/AboutComp';
import AboutTeam from './components/AboutTeam';
import { DrawerActions, useNavigation } from "@react-navigation/native";




//test feature branch again again again again again again again again



const Drawer = createDrawerNavigator();

export default function App() {
 // const navigation = useNavigation();
  return (
    
    <NavigationContainer>
      
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Homescreen}options={({navigation})=>({
           headerShown: true,
           headerLeft: () => (
            <View style={{ flex: 1, left:20 }}>
            <TouchableOpacity  onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
             <MaterialCommunityIcons
              name="microsoft-xbox-controller-menu"
              size={50}
              color="#002855"
            />
      
                
                 </TouchableOpacity>

            <Text style={{ color: '#002855' }}>  
                   {""}  Menu
               </Text>
                 </View>
          ),
          
            headerStatusBarHeight: 40,
           headerTransparent: true,
           headerTitle: " ",
           drawerIcon: () => (
            <AntDesign
              name="home"
              size={20}
              color="#eaaa00"
            />
           )

          
           })} 
           />
        <Drawer.Screen name="Symbol Dictionary" component={SymbolDictionary} options={({navigation})=>({
           headerShown: true,
           headerLeft: () => (
            <View style={{ flex: 1, left:20 }}>
            <TouchableOpacity  onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
             <MaterialCommunityIcons
              name="microsoft-xbox-controller-menu"
              size={50}
              color="#002855"
            />
      
                
                 </TouchableOpacity>

            <Text style={{ color: '#002855' }}>    
                   {""}  Menu
               </Text>
                 </View>
          ),
          
            headerStatusBarHeight: 40,
           headerTransparent: true,
           headerTitle: " ",
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="car-brake-alert"
              size={20}
              color="#eaaa00"
            />
          )
        })} 
        />
        <Drawer.Screen name="Interactive Wheel" component={InteractiveWheel} options={({navigation})=>({
           headerShown: true,
           headerLeft: () => (
            <View style={{ flex: 1, left:20 }}>
            <TouchableOpacity  onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
             <MaterialCommunityIcons
              name="microsoft-xbox-controller-menu"
              size={50}
              color="#002855"
            />
      
                
                 </TouchableOpacity>

            <Text style={{ color: '#002855' }}>    
                   {""}  Menu
               </Text>
                 </View>
          ),
          
            headerStatusBarHeight: 40,
           headerTransparent: true,
           headerTitle: " ",
           
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="steering"
              size={20}
              color="#eaaa00"
            />
          )
        })} />
        <Drawer.Screen name="EcoCar Video" component={VideoScreen} options={({navigation})=>({
           headerShown: true,
           headerLeft: () => (
            <View style={{ flex: 1, left:20 }}>
            <TouchableOpacity  onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
             <MaterialCommunityIcons
              name="microsoft-xbox-controller-menu"
              size={50}
              color="#002855"
            />
      
                
                 </TouchableOpacity>

            <Text style={{ color: '#002855' }}>    
                   {""}  Menu
               </Text>
                 </View>
          ),
          
            headerStatusBarHeight: 40,
           headerTransparent: true,
           headerTitle: " ",
          drawerIcon: () => (
            <MaterialIcons
              name="ondemand-video"
              size={20}
              color="#eaaa00"
            />
          )
        })}  />
        <Drawer.Screen name="Quiz" component={Quiz} options={({navigation})=>({
           headerShown: true,
           headerLeft: () => (
            <View style={{ flex: 1, left:20 }}>
            <TouchableOpacity onPress={() => navigation.navigate('EcoCar Video')}>
            <AntDesign
              name="back"
              size={50}
              color="#eaaa00"
            />
      
                
                 </TouchableOpacity>

            <Text style={{ color: '#eaaa00' }}>    
                   {""}  Back
               </Text>
                 </View>
          ),
          
            headerStatusBarHeight: 40,
           headerTransparent: true,
           headerTitle: " ",
          drawerItemStyle:{
            height: 0
          }
        })}  />
        <Drawer.Screen name="About Us" component={AboutUs} options={({navigation})=>({
           headerShown: true,
           headerLeft: () => (
            <View style={{ flex: 1, left:20 }}>
            <TouchableOpacity  onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
             <MaterialCommunityIcons
              name="microsoft-xbox-controller-menu"
              size={50}
              color="#002855"
            />
      
                
                 </TouchableOpacity>

            <Text style={{ color: '#002855' }}>    
                   {""}  Menu
               </Text>
                 </View>
          ),
          
            headerStatusBarHeight: 40,
           headerTransparent: true,
          
          drawerIcon: () => (
            <MaterialIcons
              name="info"
              size={20}
              color="#eaaa00"
            />
          )
        })} />
        <Drawer.Screen name="About the Car" component={AboutCar} options={({navigation})=>({
           headerShown: true,
           headerLeft: () => (
            <View style={{ flex: 1, left:20 }}>
            <TouchableOpacity onPress={() => navigation.navigate('About Us')}>
            <AntDesign
              name="back"
              size={50}
              color="#002855"
            />
      
                
                 </TouchableOpacity>

            <Text style={{ color: '#002855' }}>    
                   {""}  Back
               </Text>
                 </View>
          ),
          
          
            headerStatusBarHeight: 40,
           headerTransparent: true,
          
          drawerItemStyle:{
            height: 0
          }
        })} />
        <Drawer.Screen name="About our Team" component={AboutTeam} options={({navigation})=>({
           headerShown: true,
           headerLeft: () => (
            <View style={{ flex: 1, left:20 }}>
            <TouchableOpacity onPress={() => navigation.navigate('About Us')}>
            <AntDesign
              name="back"
              size={50}
              color="#002855"
            />
      
                
                 </TouchableOpacity>

            <Text style={{ color: '#002855' }}>    
                   {""}  Back
               </Text>
                 </View>
          ),
          
          
            headerStatusBarHeight: 40,
           headerTransparent: true,
          
          drawerItemStyle:{
            height: 0
          }
        })} />
         <Drawer.Screen name="About the Competition" component={AboutComp} options={({navigation})=>({
           headerShown: true,
           headerLeft: () => (
            <View style={{ flex: 1, left:20 }}>
            <TouchableOpacity onPress={() => navigation.navigate('About Us')}>
             <AntDesign
              name="back"
              size={50}
              color="#002855"
            />
      
                
                 </TouchableOpacity>

            <Text style={{ color: '#002855' }}>    
                   {""}  Back
               </Text>
                 </View>
          ),
          
            headerStatusBarHeight: 40,
           headerTransparent: true,
          drawerItemStyle:{
            height: 0
          }
        })} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
