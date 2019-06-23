import React from 'react';
import { StyleSheet, View, Text, Image, Easing } from 'react-native';
import { IconButton } from 'react-native-paper';


import IconMenu from '../assets/img/menu.png'
import { BlurView } from 'expo-blur';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import fondo_azul from '../assets/img/fondo-azul.png'

class MainHeader extends React.Component 
{    
  state = {
    completado:67,
    circularProgress: undefined
  };
  render() {
    return (
    <View
      tint="light" 
      intensity={50}
      style={{
        height: 275,
        width:"100%",
        zIndex:100
    }}>
        <View style={{
          height:50,
          width:"100%",
          flexDirection:"row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor:"white",
          zIndex:80,

        }}>
          
          <IconButton
                  icon="dehaze"
                  color="#3FC1C9"
                  size={20}
                  onPress={() => console.log('Pressed')}
                /> 
          <View style={{flexDirection:"row", alignItems:"center"}}>

            <Text
              style={{
                backgroundColor: "#FC5185",
                color:"white",
                fontSize:6, 
                marginRight:2,
                width:130,
                height:25,
                borderRadius:20,
                textAlign:"center",
                fontFamily: "NunitoBold",
                fontSize: 12,
                textAlignVertical:"center"                      
              }}
            >
              HACERME PREMIUM
            </Text>    
            <IconButton
              icon={require('../assets/img/logo.png')}
              color="#FC5185"
              size={40}
              onPress={() => console.log('Pressed')}
            />         
          </View>

        </View>

        <Image
          source={fondo_azul}
          resizeMode="stretch"
          style={{
            height:200, 
            width:"100%", 
            zIndex:80
        }}
        />

        <View style={{
          height:200,
          width:"100%",
          top:50,
          position:"absolute",
          zIndex:99
        }}>
          <Text style={{fontFamily:"NunitoBold", color:"white",paddingTop:15,paddingLeft:15}}>Dashboard</Text>
          <Text style={{fontFamily:"NunitoRegular", color:"white",paddingLeft:15}}>Bienvenido a Gelatin, Juan</Text>

          <View style={{
            flex:1,
            flexDirection:"row",
            paddingLeft:15,
            paddingRight: 15,
            alignItems:"center",
            justifyContent:"space-between",
            top:25
          }}>

            <View style={{
              height:50, 
              width:90, 
              borderRadius:25,
              alignItems:"center",
              justifyContent:"center",
              backgroundColor:"transparent",
            }}>
              <View style={{
                height:40, 
                width:40, 
                borderRadius:20,
                alignItems:"center",
                justifyContent:"center",
                backgroundColor:"white",
                elevation:7
              }}>
                  <IconButton
                    icon={require('../assets/img/triste.png')}
                    color="#3FC1C9"
                    size={30}
                    onPress={() => console.log('Pressed')}
                  /> 
              </View>
            </View>

            <AnimatedCircularProgress
                size={120}
                width={10}
                ref={(ref) => this.circularProgress = ref}
                duration={2000}
                prefill={0}
                fill={this.state.completado}
                tintColor="#FC5185"
                lineCap="round"
                easing={Easing.out(Easing.ease)}
                backgroundColor="rgba(255,255,255,0.2)" 
              >
              {
                (fill) => (
                  <View style={{height: 80, width:80, elevation:7, borderRadius:40, backgroundColor:"white", alignItems:"center", justifyContent:"center"}}>
                    <Text style={{color:"#FC5185", fontSize:20,  fontFamily:"NunitoBold",}}>100</Text>
                    <Text style={{color:"#FC5185", fontSize:12,  fontFamily:"NunitoRegular",}}>PASOS</Text>
                  </View>
                )
              }
            </AnimatedCircularProgress>    

            
          <View style={{
              height:40, 
              width:90, 
              borderRadius:20,
              alignItems:"center",
              justifyContent:"center",
              backgroundColor:"white",
              elevation:7,
              flexDirection:"row"
            }}>
              <View style={{marginLeft:-10}}>
                <IconButton
                  icon={require('../assets/img/gelatinas.png')}
                  color="#3FC1C9"
                  size={30}
                  onPress={() => console.log('Pressed')}
                />                 
              </View>

                <Text style={{fontFamily:"NunitoBold", fontSize:14, color:"#3FC1C9"}}>20</Text>
          </View>
            
          </View>    
        </View>

    
    </View>
    );
  } 
}
export default MainHeader