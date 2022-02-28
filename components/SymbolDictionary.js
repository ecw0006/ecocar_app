// Test Test
import React, { Component } from 'react';
import { Button, View, Text, ScrollView, Image, ImageBackground } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class SymbolDictionary extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, backgroundColor:"#002855", flexDirection:'column', alignItems: 'center', alignContent: 'center', justifyContent: 'center', paddingTop: 25, paddingHorizontal: 10}}>
          <ImageBackground source={require('../assets/blankBackground.png')} style ={{width: "100%", height: "100%"}}>
          <Image style={{width: 350, height: 200 }} source={require('../assets/ABSWarning.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>
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
          <Image style={{width: 350, height: 200 }} source={require('../assets/ACC.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>
                  This light is white when the Adaptive
                  Cruise Control (ACC, if equipped) is
                  on and ready, and turns green when
                  the ACC is set and active.
                </Text>
          <Image style={{width: 350, height: 200 }} source={require('../assets/ACCGap.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>
                  If equipped, this light indicates the
                  following gap setting (near, medium,
                  or far) for FCA, and, if equipped,
                  Adaptive Cruise Control (ACC).
                </Text>  
          <Image style={{width: 350, height: 200 }} source={require('../assets/AirbagReadiness.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>
                  This light shows if there is an
                  electrical problem with the airbag
                  system. The system check includes
                  the airbag sensor(s), the passenger
                  sensing system, the pretensioners,
                  the airbag modules, the wiring, and
                  the crash sensing and diagnostic
                  module.
                </Text>  
          <Image style={{width: 350, height: 200 }} source={require('../assets/BrakeSystemWarning.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>
                  This light should come on briefly
                  when the engine is started. If it does
                  not come on then, have it fixed so it
                  will be ready to warn you if there is
                  a problem.
                  If the light comes on and stays on,
                  there is a brake problem.
                </Text> 
          <Image style={{width: 350, height: 200 }} source={require('../assets/ChargingSystem.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>
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
          <Image style={{width: 350, height: 200 }} source={require('../assets/CheckEngine.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>
                  If this light is on
                  while the engine is running, a
                  malfunction has been detected and
                  the vehicle may require service. The
                  light should come on to show that it
                  is working when the ignition is in
                  Service Mode
                </Text> 
          <Image style={{width: 350, height: 200 }} source={require('../assets/CruiseControl.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>
                  The cruise control light is white
                  when the cruise control is on and
                  ready, and turns green when the
                  cruise control is set and active.
                </Text>  
          <Image style={{width: 350, height: 200 }} source={require('../assets/DoorAjar.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>
                  This light comes on when a door is
                  open or not securely latched. Before
                  driving, check that all doors are
                  properly closed.
                </Text> 
          <Image style={{width: 350, height: 200 }} source={require('../assets/DriverSeatbelt.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>
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
          <Image style={{width: 350, height: 200 }} source={require('../assets/ElectricParkingBrake.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>
                  The Electric Parking Brake (EPB)
                  status light comes on when the
                  parking brake is applied. If the light
                  continues flashing after the EPB is
                  released, or while driving, there is a
                  problem with the EPB system
                </Text> 
          <Image style={{width: 350, height: 200 }} source={require('../assets/EngineOilPressure.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>
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
          <Image style={{width: 350, height: 200 }} source={require('../assets/HighBeamOn.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>
                  This light comes on when the
                  high-beam headlamps are in use.
                </Text> 
          <Image style={{width: 350, height: 200 }} source={require('../assets/IntellibeamLight.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>
                  This light comes on when the
                  IntelliBeam system, if equipped, is
                  enabled. 
                </Text> 
          <Image style={{width: 350, height: 200 }} source={require('../assets/LampsOnReminder.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>
                  This light comes on when the
                  exterior lamps are in use.
                </Text> 
          <Image style={{width: 350, height: 200 }} source={require('../assets/LaneKeepAssist.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>
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
          <Image style={{width: 350, height: 200 }} source={require('../assets/LowFuelWarning.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>
                  This light is near the fuel gauge and
                  comes on briefly when the ignition is
                  turned on as a check to show it is
                  working.
                  It also comes on when the fuel tank
                  is low on fuel. The light turns off
                  when fuel is added. If it does not,
                  have the vehicle serviced.
                </Text> 
          <Image style={{width: 350, height: 200 }} source={require('../assets/PassengerSeatbelt.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>
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
          <Image style={{width: 350, height: 200 }} source={require('../assets/PedestrianAhead.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>
                  If equipped, this indicator will
                  display amber when a nearby
                  pedestrian is detected directly in
                  front of the vehicle.
                </Text> 
          <Image style={{width: 350, height: 200 }} source={require('../assets/Security.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>
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
          <Image style={{width: 350, height: 200 }} source={require('../assets/ServiceElectricParkingBrake.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>
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
          <Image style={{width: 350, height: 200 }} source={require('../assets/StabiliTrak.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>
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
          <Image style={{width: 350, height: 200 }} source={require('../assets/StabiliTrakOff.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>
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
          <Image style={{width: 350, height: 200 }} source={require('../assets/TirePressure.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>
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
          <Image style={{width: 350, height: 200 }} source={require('../assets/TowMode.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>
                  For vehicles with the Tow/Haul
                  Mode feature, this light comes on
                  when the Tow/Haul Mode has been
                  activated.
                </Text> 
          <Image style={{width: 350, height: 200 }} source={require('../assets/TractionOff.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>
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
          <Image style={{width: 350, height: 200 }} source={require('../assets/VehicleAheadIndicator.png')}/>
          <Text style = {{fontSize: 30, color: 'white'}}>
                  If equipped, this indicator will
                  display green when a vehicle is
                  detected ahead and amber when
                  you are following a vehicle ahead
                  much too closely.
                </Text>                                                              
          </ImageBackground>
        </View>
      </ScrollView>
    )
  }
}