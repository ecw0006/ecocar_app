//Interactive Wheel.js
import React, { Component } from 'react';
import { Button, View, Text, Image, ImageBackground, Pressable } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet, StyleSheetProperties, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import { useState } from 'react/cjs/react.development';
import { MaterialIcons } from '@expo/vector-icons';


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
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },

  button: {
    
    
  },
  
  });

export default class InteractiveWheel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal01: false,
      modal02: false,
      modal03: false,
      modal04: false,
      modal05: false,
      modal06: false,
      modal07: false,
      modal08: false,
      modal10: true
    };
  }
  
  render() {
  
    return (
      
      <View style={styles.container}>
        <ImageBackground source={require("../assets/blankhomeScreenv2.png")} style= {{width: '100%', height: '100%'}}>
        
        <ImageBackground style= {{width: 800, height: 800, justifyContent: "center", top: 200, left: 5}} source ={require("../assets/Wheel_final.png")}>
         
        <View style={styles.container}>
        <Modal
          transparent={true}
          isVisible={this.state.modal10}
          style={{
            flex: 1,
            margin: 0,
            justifyContent: "center",
            alignItems: "center"
          }}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => {
            this.setState({ modal10: false });
          }}
        >
          <View
            style={{
              height: 300,
              width: 300,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#C6C5B9"
            }}
          >
             <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
             Welcome to the interactive wheel for your Chevy Blazer! Press any button on the wheel to learn what it does.
            </Text>
            <TouchableOpacity
              style={{
                height: 30,
                width: 180,
                backgroundColor: "#62929E",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.setState({ modal10: false })}
            >
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>


        <Modal
          transparent={true}
          isVisible={this.state.modal01}
          style={{
            flex: 1,
            margin: 0,
            justifyContent: "center",
            alignItems: "center"
          }}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => {
            this.setState({ modal01: false });
          }}
        >
          <View
            style={{
              height: 300,
              width: 300,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#C6C5B9"
            }}
          >
            <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
            If there is a set speed in memory,
move the thumbwheel up towards the RES button to resume
to that speed, or press and hold to
accelerate. If the cruise control is already
active, use to increase vehicle speed.
            </Text>
            <TouchableOpacity
              style={{
                height: 30,
                width: 180,
                backgroundColor: "#62929E",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.setState({ modal01: false })}
            >
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          transparent={true}
          isVisible={this.state.modal02}
          style={{
            flex: 1,
            margin: 0,
            justifyContent: "center",
            alignItems: "center"
          }}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => {
            this.setState({ modal02: false });
          }}
        >
          <View
            style={{
              height: 300,
              width: 300,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#C6C5B9"
            }}
          >
             <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
           Press the thumbwheel
down briefly to set the speed and
activate cruise control. If cruise
control is already engaged, use to
decrease vehicle speed.
            </Text>
            <TouchableOpacity
              style={{
                height: 30,
                width: 180,
                backgroundColor: "#62929E",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.setState({ modal02: false })}
            >
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          transparent={true}
          isVisible={this.state.modal03}
          style={{
            flex: 1,
            margin: 0,
            justifyContent: "center",
            alignItems: "center"
          }}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => {
            this.setState({ modal03: false });
          }}
        >
          <View
            style={{
              height: 300,
              width: 300,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#C6C5B9"
            }}
          >
             <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
             Press to turn the system on
and off. A white indicator appears in
the instrument cluster when cruise
is turned on.
            </Text>
            <TouchableOpacity
              style={{
                height: 30,
                width: 180,
                backgroundColor: "#62929E",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.setState({ modal03: false })}
            >
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          transparent={true}
          isVisible={this.state.modal04}
          style={{
            flex: 1,
            margin: 0,
            justifyContent: "center",
            alignItems: "center"
          }}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => {
            this.setState({ modal04: false });
          }}
        >
          <View
            style={{
              height: 300,
              width: 300,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#C6C5B9"
            }}
          >
             <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
             Beep! Press to sound the horn.
            </Text>
            <TouchableOpacity
              style={{
                height: 30,
                width: 180,
                backgroundColor: "#62929E",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.setState({ modal04: false })}
            >
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          transparent={true}
          isVisible={this.state.modal05}
          style={{
            flex: 1,
            margin: 0,
            justifyContent: "center",
            alignItems: "center"
          }}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => {
            this.setState({ modal05: false });
          }}
        >
          <View
            style={{
              height: 300,
              width: 300,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#C6C5B9"
            }}
          >
             <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
             Press to select a following gap
time (or distance) setting for ACC of
Far, Medium, or Near.
            </Text>
            <TouchableOpacity
              style={{
                height: 30,
                width: 180,
                backgroundColor: "#62929E",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.setState({ modal05: false })}
            >
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          transparent={true}
          isVisible={this.state.modal06}
          style={{
            flex: 1,
            margin: 0,
            justifyContent: "center",
            alignItems: "center"
          }}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => {
            this.setState({ modal06: false });
          }}
        >
          <View
            style={{
              height: 300,
              width: 300,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#C6C5B9"
            }}
          >
             <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
             If equipped, press to turn the
heated steering wheel on or off.
A light next to the button displays
when the feature is turned on.
The steering wheel takes about
three minutes to start heating.
            </Text>
            <TouchableOpacity
              style={{
                height: 30,
                width: 180,
                backgroundColor: "#62929E",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.setState({ modal06: false })}
            >
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          transparent={true}
          isVisible={this.state.modal07}
          style={{
            flex: 1,
            margin: 0,
            justifyContent: "center",
            alignItems: "center"
          }}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => {
            this.setState({ modal07: false });
          }}
        >
          <View
            style={{
              height: 300,
              width: 300,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#C6C5B9"
            }}
          >
             <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
             Press to decline an incoming
call or end a current call. Press to
mute or unmute the infotainment
system when not on a call.
            </Text>
            <TouchableOpacity
              style={{
                height: 30,
                width: 180,
                backgroundColor: "#62929E",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.setState({ modal07: false })}
            >
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          transparent={true}
          isVisible={this.state.modal08}
          style={{
            flex: 1,
            margin: 0,
            justifyContent: "center",
            alignItems: "center"
          }}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => {
            this.setState({ modal08: false });
          }}
        >
          <View
            style={{
              height: 300,
              width: 300,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#C6C5B9"
            }}
          >
             <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 20, marginLeft: 10, marginRight: 10, marginTop: 10 }}>
             Control the music source and make phone calls hands-free using the natural voice recognition system.
             {'\n'}
             {'\n'}
1. Press the Press to Talk button on the steering wheel.
{'\n'}
2. The radio will play a prompt followed by a beep.
{'\n'}
3. After the beep, say what you want it to do using natural speech. Examples: “Call Amanda” or “Tune FM 104.3.” Say “Help” for assistance.
            </Text>
            <TouchableOpacity
              style={{
                height: 30,
                width: 180,
                backgroundColor: "#62929E",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.setState({ modal08: false })}
            >
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal
          transparent={true}
          isVisible={this.state.modal09}
          style={{
            flex: 1,
            margin: 0,
            justifyContent: "center",
            alignItems: "center"
          }}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => {
            this.setState({ modal09: false });
          }}
        >
          <View
            style={{
              height: 300,
              width: 300,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#C6C5B9"
            }}
          >
             <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 20, marginLeft: 10, marginRight: 10, marginTop: 10 }}>
             Press to move left or right
between the interactive display
zones in the cluster. Use the thumbwheel to scroll up and down in a list. Press the
thumbwheel to select.
            </Text>
            <TouchableOpacity
              style={{
                height: 30,
                width: 180,
                backgroundColor: "#62929E",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => this.setState({ modal09: false })}
            >
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        
            
       <TouchableOpacity style={styles.button} onPress={() => this.setState({ modal01: true })}>
           <Image style= {{resizeMode:'contain',position: 'absolute', width: 142, height: 142, left: 108, top: 298}} source ={require("../assets/res1.png")}  />
          </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{ this.setState({ modal02: true })}}>
        <Image style= {{resizeMode:'contain',position: 'absolute', width: 142, height: 142, left: 111.2, top: 365}} source ={require("../assets/set1.png")}  />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{ this.setState({ modal03: true })}}>
        <Image style= {{resizeMode:'contain',position: 'absolute', width: 88, height: 88, left: 126.5, top: 350}} source ={require("../assets/buttons1.png")}  />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{ this.setState({ modal04: true })}}>
        <Image style= {{resizeMode:'contain',position: 'absolute', width: 314, height: 314, left: 242, top: 321}} source ={require("../assets/horn.png")}  />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{ this.setState({ modal05: true })}}>
        <Image style= {{resizeMode:'contain',position: 'absolute', width: 54, height: 54, left: 194, top: 351}} source ={require("../assets/following_distance.png")}  />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{ this.setState({ modal06: true })}}>
        <Image style= {{resizeMode:'contain',position: 'absolute', width: 54, height: 54, left: 194, top: 387}} source ={require("../assets/wheel_arrows.png")}  />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={()=>{ this.setState({ modal09: true })}}>
        <Image style= {{resizeMode:'contain',position: 'absolute', width: 158, height: 158, right: 105, top: 344}} source ={require("../assets/arrows.png")}  />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{ this.setState({ modal07: true })}}>
        <Image style= {{resizeMode:'contain',position: 'absolute', width: 51, height: 51, right: 199, top: 389}} source ={require("../assets/hang_up.png")}  />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{ this.setState({ modal08: true })}}>
        <Image style= {{resizeMode:'contain',position: 'absolute', width: 51, height: 51, right: 199, top: 351}} source ={require("../assets/talk.png")}  />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{ this.setState({ modal10: true })}}>
        
        <MaterialIcons
              style = {{left: 33, top: 700}}
              name="help"
              size={40}
              color="#eaaa00"
            />
       <Text style={{ color: '#eaaa00',left: 30, top: 700 }}>  
                   {""}  Help
               </Text>
        </TouchableOpacity>
        </View>
       
       
         
        </ImageBackground>
    </ImageBackground>
        
      </View>
    )
  }
}

