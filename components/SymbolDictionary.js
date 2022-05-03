// Test Test
import React, { Component } from 'react';
import { Button, View, Text, ScrollView, Image, ImageBackground,TouchableOpacity, StyleSheet} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Modal from "react-native-modal";
import { useState } from 'react/cjs/react.development';
import { useIsFocused } from "@react-navigation/native";

function demo() {
  const ref = React.useRef(null)

  useIsFocused(ref)

  return <ScrollView ref={ref}>{/* content */}</ScrollView>
}


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
    height: 400,
    width: 400,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C6C5B9"
  },
  modalstyle: {
    flex: 1,
            margin: 0,
            justifyContent: "center",
            alignItems: "center"
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    height: 30,
                width: 180,
                backgroundColor: "#62929E",
                justifyContent: "center",
                alignItems: "center",
  },


  
  });

export default class SymbolDictionary extends Component {
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
      modal09: false,
      modal10: false,
      modal11: false,
      modal12: false,
      modal13: false,
      modal14: false,
      modal15: false,
      modal16: false,
      modal17: false,
      modal18: false,
      modal19: false,
      modal20: false,
      modal21: false,
      modal22: false,
      modal23: false,
      modal24: false,
      modal25: false,
      modal26: false,
      modal27: false
    };
  }
  
  render() {
    
    return (
      
      <View>
      <ImageBackground source={require('../assets/homeScreenv2.png')} style ={{width: "100%", height: "100%"}}>
      <View style={{ flex: 1, backgroundColor:'#00000000',alignItems: 'center', paddingTop: 200, paddingHorizontal: 10}}>
        <Text style={{ fontSize: 40, color: "#eaaa00" }}>Tap any symbol to find out more!</Text>
        </View>
       <View style={{height: 725, top: -42}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{ flex: 1, backgroundColor:'#00000000', flexDirection:'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingTop: 10, paddingHorizontal: 10}}>
       
       {/* ABS */}
        <Modal
          transparent={true}
          isVisible={this.state.modal01}
          style={styles.modalstyle}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => { this.setState({ modal01: false });}}
        >
          <View style={styles.modalView}>
            <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
            This light comes on briefly when the
                  engine is started.
                  If the light does not come on, have it
                  fixed so it will be ready to warn if
                  there is a problem.
                  If the light comes on while driving,
                  stop as soon as it is safely possible
                  and turn off the vehicle. Then start
                  the engine again to reset the
                  system. If the ABS light stays on,
                  or comes on again while driving, the
                  vehicle needs service. A chime may
                  also sound when the light comes on
                  steady.
                  If the ABS light is the only light on,
                  the vehicle has regular brakes, but
                  the antilock brakes are not
                  functioning.
                  If both the ABS and the brake
                  system warning light are on, the
                  vehicle's antilock brakes are not
                  functioning and there is a problem
                  with the regular brakes. See your
                  dealer for service.
            </Text>
            <TouchableOpacity style={styles.buttonClose} onPress={() => this.setState({ modal01: false })}>
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ modal01: true })}>
        <Image style={{width: 350, height: 200 }} source={require('../assets/ABSWarning.png')}/>
          </TouchableOpacity>

          {/* ACC  */}
          <Modal
          transparent={true}
          isVisible={this.state.modal02}
          style={styles.modalstyle}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => { this.setState({ modal02: false });}}
        >
          <View style={styles.modalView}>
            <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
            This light is white when the Adaptive
                  Cruise Control (ACC, if equipped) is
                  on and ready, and turns green when
                  the ACC is set and active.
            </Text>
            <TouchableOpacity style={styles.buttonClose} onPress={() => this.setState({ modal02: false })}>
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ modal02: true })}>
        <Image style={{width: 350, height: 200 }} source={require('../assets/ACC.png')}/>
          </TouchableOpacity>
           
         {/* Gap Light */}
         <Modal
          transparent={true}
          isVisible={this.state.modal03}
          style={styles.modalstyle}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => { this.setState({ modal03: false });}}
        >
          <View style={styles.modalView}>
            <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
            If equipped, this light indicates the
                  following gap setting (near, medium,
                  or far) for FCA, and, if equipped,
                  Adaptive Cruise Control (ACC).
            </Text>
            <TouchableOpacity style={styles.buttonClose} onPress={() => this.setState({ modal03: false })}>
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ modal03: true })}>
        <Image style={{width: 350, height: 200 }} source={require('../assets/ACCGap.png')}/>
          </TouchableOpacity>
          
         {/* AirbagReadiness */}
         <Modal
          transparent={true}
          isVisible={this.state.modal04}
          style={styles.modalstyle}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => { this.setState({ modal04: false });}}
        >
          <View style={styles.modalView}>
            <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
            This light shows if there is an
                  electrical problem with the airbag
                  system. The system check includes
                  the airbag sensor(s), the passenger
                  sensing system, the pretensioners,
                  the airbag modules, the wiring, and
                  the crash sensing and diagnostic
                  module.
            </Text>
            <TouchableOpacity style={styles.buttonClose} onPress={() => this.setState({ modal04: false })}>
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ modal04: true })}>
        <Image style={{width: 350, height: 200 }} source={require('../assets/AirbagReadiness.png')}/>
          </TouchableOpacity>


      
          {/* Brake */}
          <Modal
          transparent={true}
          isVisible={this.state.modal05}
          style={styles.modalstyle}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => { this.setState({ modal05: false });}}
        >
          <View style={styles.modalView}>
            <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
            This light should come on briefly
                  when the engine is started. If it does
                  not come on then, have it fixed so it
                  will be ready to warn you if there is
                  a problem.
                  If the light comes on and stays on,
                  there is a brake problem.
            </Text>
            <TouchableOpacity style={styles.buttonClose} onPress={() => this.setState({ modal05: false })}>
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ modal05: true })}>
        <Image style={{width: 350, height: 200 }} source={require('../assets/BrakeSystemWarning.png')}/>
          </TouchableOpacity>
       {/* ChargingSystem */}
       <Modal
          transparent={true}
          isVisible={this.state.modal06}
          style={styles.modalstyle}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => { this.setState({ modal06: false });}}
        >
          <View style={styles.modalView}>
            <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
            The charging system light comes on
                  briefly when the ignition is turned
                  on, but the engine is not running, as
                  a check to show the light is working.
                  The light turns off when the engine
                  is started. If it does not, have the
                  vehicle serviced by your dealer.
                  If the light stays on, or comes on
                  while driving, there may be a
                  problem with the electrical charging
                  system. Have it checked by your
                  dealer. Driving while this light is on
                  could drain the battery.
            </Text>
            <TouchableOpacity style={styles.buttonClose} onPress={() => this.setState({ modal06: false })}>
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ modal06: true })}>
        <Image style={{width: 350, height: 200 }} source={require('../assets/ChargingSystem.png')}/>
          </TouchableOpacity>
        {/* CheckEngine */}
        <Modal
          transparent={true}
          isVisible={this.state.modal07}
          style={styles.modalstyle}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => { this.setState({ modal07: false });}}
        >
          <View style={styles.modalView}>
            <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
            If this light is on
                  while the engine is running, a
                  malfunction has been detected and
                  the vehicle may require service. The
                  light should come on to show that it
                  is working when the ignition is in
                  Service Mode.
            </Text>
            <TouchableOpacity style={styles.buttonClose} onPress={() => this.setState({ modal07: false })}>
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ modal07: true })}>
        <Image style={{width: 350, height: 200 }} source={require('../assets/CheckEngine.png')}/>
          </TouchableOpacity>
         
        {/* CruiseControl */}
        <Modal
          transparent={true}
          isVisible={this.state.modal08}
          style={styles.modalstyle}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => { this.setState({ modal08: false });}}
        >
          <View style={styles.modalView}>
            <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
            The cruise control light is white
                  when the cruise control is on and
                  ready, and turns green when the
                  cruise control is set and active.
            </Text>
            <TouchableOpacity style={styles.buttonClose} onPress={() => this.setState({ modal08: false })}>
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ modal08: true })}>
        <Image style={{width: 350, height: 200 }} source={require('../assets/CruiseControl.png')}/>
          </TouchableOpacity>

          {/* DoorAjar */}
          <Modal
          transparent={true}
          isVisible={this.state.modal09}
          style={styles.modalstyle}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => { this.setState({ modal09: false });}}
        >
          <View style={styles.modalView}>
            <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
            This light comes on when a door is
                  open or not securely latched. Before
                  driving, check that all doors are
                  properly closed.
            </Text>
            <TouchableOpacity style={styles.buttonClose} onPress={() => this.setState({ modal09: false })}>
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ modal09: true })}>
        <Image style={{width: 350, height: 200 }} source={require('../assets/DoorAjar.png')}/>
          </TouchableOpacity>


       {/* DriverSeatbelt */}
       <Modal
          transparent={true}
          isVisible={this.state.modal10}
          style={styles.modalstyle}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => { this.setState({ modal10: false });}}
        >
          <View style={styles.modalView}>
            <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
            When the vehicle is started, this
                  light flashes and a chime may come
                  on to remind the driver to fasten
                  their seat belt. Then the light stays
                  on solid until the belt is buckled.
                  This cycle may continue several
                  times if the driver remains or
                  becomes unbuckled while the
                  vehicle is moving.
            </Text>
            <TouchableOpacity style={styles.buttonClose} onPress={() => this.setState({ modal10: false })}>
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ modal10: true })}>
        <Image style={{width: 350, height: 200 }} source={require('../assets/DriverSeatbelt.png')}/>
          </TouchableOpacity>

        {/* Park */}
        <Modal
          transparent={true}
          isVisible={this.state.modal11}
          style={styles.modalstyle}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => { this.setState({ modal11: false });}}
        >
          <View style={styles.modalView}>
            <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
            The Electric Parking Brake (EPB)
                  status light comes on when the
                  parking brake is applied. If the light
                  continues flashing after the EPB is
                  released, or while driving, there is a
                  problem with the EPB system
            </Text>
            <TouchableOpacity style={styles.buttonClose} onPress={() => this.setState({ modal11: false })}>
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ modal11: true })}>
        <Image style={{width: 350, height: 200 }} source={require('../assets/ElectricParkingBrake.png')}/>
          </TouchableOpacity>
         {/* Engine Oil */}
         <Modal
          transparent={true}
          isVisible={this.state.modal12}
          style={styles.modalstyle}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => { this.setState({ modal12: false });}}
        >
          <View style={styles.modalView}>
            <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
            This light should come on briefly as
                  the engine is started. If it does not
                  come on, have the vehicle serviced
                  by your dealer.
                  If the light comes on and stays on, it
                  means that oil is not flowing through
                  the engine properly. The vehicle
                  could be low on oil and might have
                  some other system problem. See
                  your dealer.
            </Text>
            <TouchableOpacity style={styles.buttonClose} onPress={() => this.setState({ modal12: false })}>
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ modal12: true })}>
        <Image style={{width: 350, height: 200 }} source={require('../assets/EngineOilPressure.png')}/>
          </TouchableOpacity>

         {/* High Beam */}
         <Modal
          transparent={true}
          isVisible={this.state.modal13}
          style={styles.modalstyle}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => { this.setState({ modal13: false });}}
        >
          <View style={styles.modalView}>
            <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
            This light comes on when the
                  high-beam headlamps are in use.
            </Text>
            <TouchableOpacity style={styles.buttonClose} onPress={() => this.setState({ modal13: false })}>
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ modal13: true })}>
        <Image style={{width: 350, height: 200 }} source={require('../assets/HighBeamOn.png')}/>
          </TouchableOpacity>

          {/* Intellibeam */}
          <Modal
          transparent={true}
          isVisible={this.state.modal14}
          style={styles.modalstyle}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => { this.setState({ modal14: false });}}
        >
          <View style={styles.modalView}>
            <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
            This light comes on when the
                  IntelliBeam system, if equipped, is
                  enabled.
            </Text>
            <TouchableOpacity style={styles.buttonClose} onPress={() => this.setState({ modal14: false })}>
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ modal14: true })}>
        <Image style={{width: 350, height: 200 }} source={require('../assets/IntellibeamLight.png')}/>
          </TouchableOpacity>
          {/* Lamps on */}
          <Modal
          transparent={true}
          isVisible={this.state.modal15}
          style={styles.modalstyle}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => { this.setState({ modal15: false });}}
        >
          <View style={styles.modalView}>
            <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
            This light comes on when the
                  exterior lamps are in use.
            </Text>
            <TouchableOpacity style={styles.buttonClose} onPress={() => this.setState({ modal15: false })}>
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ modal15: true })}>
        <Image style={{width: 350, height: 200 }} source={require('../assets/LampsOnReminder.png')}/>
          </TouchableOpacity> 

          {/* Lane keep assist */}
          <Modal
          transparent={true}
          isVisible={this.state.modal16}
          style={styles.modalstyle}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => { this.setState({ modal16: false });}}
        >
          <View style={styles.modalView}>
            <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
            This light is green if LKA is available
                  to assist.
                  LKA may assist by gently turning
                  the steering wheel if the vehicle
                  approaches a detected lane marking
                  without using the turn signal in that
                  direction. The LKA light will turn
                  amber.
                  This light is amber and flashes as a
                  Lane Departure Warning (LDW)
                  alert, to indicate that the lane
                  marking has been crossed.
            </Text>
            <TouchableOpacity style={styles.buttonClose} onPress={() => this.setState({ modal16: false })}>
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ modal16: true })}>
        <Image style={{width: 350, height: 200 }} source={require('../assets/LaneKeepAssist.png')}/>
          </TouchableOpacity>


         {/* Low Fuel */}
         <Modal
          transparent={true}
          isVisible={this.state.modal17}
          style={styles.modalstyle}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => { this.setState({ modal17: false });}}
        >
          <View style={styles.modalView}>
            <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
            This light is near the fuel gauge and
                  comes on briefly when the ignition is
                  turned on as a check to show it is
                  working.
                  It also comes on when the fuel tank
                  is low on fuel. The light turns off
                  when fuel is added. If it does not,
                  have the vehicle serviced.
            </Text>
            <TouchableOpacity style={styles.buttonClose} onPress={() => this.setState({ modal17: false })}>
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ modal17: true })}>
        <Image style={{width: 350, height: 200 }} source={require('../assets/LowFuelWarning.png')}/>
          </TouchableOpacity> 


         {/* Passenger Seatbelt */}
         <Modal
          transparent={true}
          isVisible={this.state.modal18}
          style={styles.modalstyle}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => { this.setState({ modal18: false });}}
        >
          <View style={styles.modalView}>
            <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
            When the vehicle is started, this
                  light flashes and a chime may come
                  on to remind passengers to fasten
                  their seat belt. Then the light stays
                  on solid until the belt is buckled.
                  This cycle continues several times if
                  the passenger remains or becomes
                  unbuckled while the vehicle is
                  moving.
            </Text>
            <TouchableOpacity style={styles.buttonClose} onPress={() => this.setState({ modal18: false })}>
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ modal18: true })}>
        <Image style={{width: 350, height: 200 }} source={require('../assets/PassengerSeatbelt.png')}/>
          </TouchableOpacity> 
          
          {/* Pedestrian Ahead */}
         <Modal
          transparent={true}
          isVisible={this.state.modal19}
          style={styles.modalstyle}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => { this.setState({ modal19: false });}}
        >
          <View style={styles.modalView}>
            <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
            If equipped, this indicator will
                  display amber when a nearby
                  pedestrian is detected directly in
                  front of the vehicle.
            </Text>
            <TouchableOpacity style={styles.buttonClose} onPress={() => this.setState({ modal19: false })}>
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ modal19: true })}>
        <Image style={{width: 350, height: 200 }} source={require('../assets/PedestrianAhead.png')}/>
          </TouchableOpacity> 
          
           {/* Security */}
         <Modal
          transparent={true}
          isVisible={this.state.modal20}
          style={styles.modalstyle}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => { this.setState({ modal20: false });}}
        >
          <View style={styles.modalView}>
            <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
            The security light should come on
                  briefly as the engine is started. If it
                  does not come on, have the vehicle
                  serviced by your dealer. If the
                  system is working normally, the
                  indicator light turns off.
                  If the light stays on and the engine
                  does not start, there could be a
                  problem with the theft-deterrent
                  system.
            </Text>
            <TouchableOpacity style={styles.buttonClose} onPress={() => this.setState({ modal20: false })}>
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ modal20: true })}>
        <Image style={{width: 350, height: 200 }} source={require('../assets/Security.png')}/>
          </TouchableOpacity> 

        {/* Service park break */}
        <Modal
          transparent={true}
          isVisible={this.state.modal21}
          style={styles.modalstyle}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => { this.setState({ modal21: false });}}
        >
          <View style={styles.modalView}>
            <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
            On some vehicles the service
                  electric parking brake light should
                  come on briefly when the vehicle is
                  started. If it does not come on, have
                  it fixed so it will be ready to warn if
                  there is a problem. For vehicles with
                  the reconfigurable cluster, this light
                  may not come on when the vehicle
                  is started.
                  If this light stays on, the vehicle
                  should be taken to a dealer as soon
                  as possible.
            </Text>
            <TouchableOpacity style={styles.buttonClose} onPress={() => this.setState({ modal21: false })}>
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ modal21: true })}>
        <Image style={{width: 350, height: 200 }} source={require('../assets/ServiceElectricParkingBrake.png')}/>
          </TouchableOpacity> 

          {/* StabiliTrak */}
        <Modal
          transparent={true}
          isVisible={this.state.modal22}
          style={styles.modalstyle}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => { this.setState({ modal22: false });}}
        >
          <View style={styles.modalView}>
            <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
            This light comes on briefly when the
                  engine is started.
                  If the light does not come on, have
                  the vehicle serviced by your dealer.
                  If the system is working normally,
                  the indicator light turns off.
                  If the light is on and not flashing, the
                  TCS and potentially the StabiliTrak/
                  ESC system have been disabled.
                  A Driver Information Center (DIC)
                  message may display. Check the
                  DIC messages to determine which
                  feature(s) is no longer functioning
                  and whether the vehicle requires
                  service.
                  If the light is on and flashing, the
                  TCS and/or the StabiliTrak/ESC
                  system is actively working.
            </Text>
            <TouchableOpacity style={styles.buttonClose} onPress={() => this.setState({ modal22: false })}>
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ modal22: true })}>
        <Image style={{width: 350, height: 200 }} source={require('../assets/StabiliTrak.png')}/>
          </TouchableOpacity> 
         
         {/* StabiliTrak OFF */}
        <Modal
          transparent={true}
          isVisible={this.state.modal23}
          style={styles.modalstyle}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => { this.setState({ modal23: false });}}
        >
          <View style={styles.modalView}>
            <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
            This light comes on briefly while
                  starting the engine. If it does not,
                  have the vehicle serviced by your
                  dealer.
                  This light comes on when the
                  StabiliTrak/Electronic Stability
                  Control (ESC) system is turned off.
                  If StabiliTrak/ESC is off, the Traction
                  Control System (TCS) is also off.
                  If StabiliTrak/ESC and TCS are off,
                  the system does not assist in
                  controlling the vehicle. Turn on the
                  TCS and the StabiliTrak/ESC
                  systems, and the warning light
                  turns off.
            </Text>
            <TouchableOpacity style={styles.buttonClose} onPress={() => this.setState({ modal23: false })}>
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ modal23: true })}>
        <Image style={{width: 350, height: 200 }} source={require('../assets/StabiliTrakOff.png')}/>
          </TouchableOpacity> 

           {/*  Tire pressure */}
        <Modal
          transparent={true}
          isVisible={this.state.modal24}
          style={styles.modalstyle}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => { this.setState({ modal24: false });}}
        >
          <View style={styles.modalView}>
            <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
            For vehicles with the Tire Pressure
                  Monitor System (TPMS), this light
                  comes on briefly when the engine is
                  started. It provides information
                  about tire pressures and the TPMS.
                  When the Light Is On Steady
                  This indicates that one or more of
                  the tires are significantly
                  underinflated.
                  When the Light Flashes First and
                  Then Is On Steady
                  If the light flashes for about a minute
                  and then stays on, there may be a
                  problem with the TPMS. If the
                  problem is not corrected, the light
                  will come on at every ignition cycle.
            </Text>
            <TouchableOpacity style={styles.buttonClose} onPress={() => this.setState({ modal24: false })}>
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ modal24: true })}>
        <Image style={{width: 350, height: 200 }} source={require('../assets/TirePressure.png')}/>
          </TouchableOpacity> 

           {/*  Tow Mode */}
        <Modal
          transparent={true}
          isVisible={this.state.modal25}
          style={styles.modalstyle}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => { this.setState({ modal25: false });}}
        >
          <View style={styles.modalView}>
            <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
            For vehicles with the Tow/Haul
                  Mode feature, this light comes on
                  when the Tow/Haul Mode has been
                  activated.
            </Text>
            <TouchableOpacity style={styles.buttonClose} onPress={() => this.setState({ modal25: false })}>
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ modal25: true })}>
        <Image style={{width: 350, height: 200 }} source={require('../assets/TowMode.png')}/>
          </TouchableOpacity>

           {/*  Traction OFF */}
        <Modal
          transparent={true}
          isVisible={this.state.modal26}
          style={styles.modalstyle}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => { this.setState({ modal26: false });}}
        >
          <View style={styles.modalView}>
            <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
            This light comes on briefly while
                  starting the engine. If it does not,
                  have the vehicle serviced by your
                  dealer. If the system is working
                  normally, the indicator light then
                  turns off.
                  The traction off light comes on when
                  the Traction Control System (TCS)
                  has been turned off by pressing and
                  releasing the TCS/StabiliTrak/
                  Electronic Stability Control (ESC)
                  button.
                  This light and the StabiliTrak OFF
                  light come on when StabiliTrak/ESC
                  is turned off.
                  If the TCS is off, wheel speed will
                  be limited when necessary to
                  protect the driveline from damage.
                  Adjust driving accordingly.
            </Text>
            <TouchableOpacity style={styles.buttonClose} onPress={() => this.setState({ modal26: false })}>
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ modal26: true })}>
        <Image style={{width: 350, height: 200 }} source={require('../assets/TractionOff.png')}/>
          </TouchableOpacity>
         
         {/*  Traction OFF */}
        <Modal
          transparent={true}
          isVisible={this.state.modal27}
          style={styles.modalstyle}
          animationIn={"slideInRight"} // <---
          animationOut={"slideOutLeft"}
          onBackdropPress={() => { this.setState({ modal27: false });}}
        >
          <View style={styles.modalView}>
            <Text style={{ color: "#4A6D7C", fontSize: 15, marginBottom: 60, marginLeft: 10, marginRight: 10 }}>
            If equipped, this indicator will
                  display green when a vehicle is
                  detected ahead and amber when
                  you are following a vehicle ahead
                  much too closely.
            </Text>
            <TouchableOpacity style={styles.buttonClose} onPress={() => this.setState({ modal27: false })}>
              <Text style={{ color: "#C6C5B9" }}>Got it!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => this.setState({ modal27: true })}>
        <Image style={{width: 350, height: 200 }} source={require('../assets/VehicleAheadIndicator.png')}/>
          </TouchableOpacity>
                                                                      
          
        </View>
      </ScrollView>
      </View>
      </ImageBackground>
      </View>
    )
  }
}