import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView, ImageBackground, Image } from 'react-native';
import { Surface, IconButton, Divider, Badge } from 'react-native-paper';
import { connect } from 'react-redux'
import moment from 'moment-with-locales-es6'

import Chip from '../dumbs/Chip'
import Card from '../dumbs/MyCard'
import MainHeader from '../dumbs/MainHeader'

import Actividades from './Cards/Actividades'
import ComoTeSientes from './Cards/ComoTeSientes'
import Comidas from './Cards/Comidas'
import Agua from './Cards/Agua'
import DatosCardiovasculares from './Cards/DatosCardiovasculares'
import Alarmas from './Cards/Alarmas'
import AlarmaPrincipal from './Cards/AlarmaPrincipal'
import Fecha from './Cards/Fecha'

import HeaderTransparente from '../../assets/header_transparente.png'
import ii from '../../assets/header_transparente.png'

import IconMenu from '../../assets/pngs/menu.png'

import {
  theColor, 
  theElevation, 
  theSize, 
  styles
} from '../../styles/dashboard'

class Dashboard extends React.Component 
{    
  render() {
    return (
        <ScrollView 
          style={{ 
            flexDirection: "column", 
            backgroundColor: "#f5f5f5", 
            marginTop:24
          }} 
          stickyHeaderIndices={[0]}
        >
            
            <View 
              style={{
                height: 250,
                width:"100%",
                backgroundColor: "transparent",
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
                  <Text
                    style={{
                      backgroundColor: "#3FC1C9",
                      color:"white",
                      fontSize:12, 
                      fontWeight: "500", 
                      right:10,
                      padding:5,
                      width:"30%",
                      borderRadius:20,
                      textAlign:"center",
                      fontFamily: "NunitoRegular",
                      fontSize: 12                      
                    }}
                  >HAZTE PREMIUM</Text>
                </View>

                <Image
                  source={ii}
                  style={{
                    height:200, 
                    width:"100%", 
                    zIndex:80,
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
                  <Text style={{fontFamily:"NunitoRegular", color:"white",paddingLeft:15}}>BIenvenido a Gelatin, Juan</Text>

                  <View style={{
                    flex:1,
                    flexDirection:"row",
                    paddingLeft:15,
                    paddingRight: 15,
                    alignItems:"center",
                    justifyContent:"space-between"
                  }}>
                    <View style={{
                      height:50, 
                      width:90, 
                      borderRadius:25,
                      alignItems:"center",
                      justifyContent:"center",
                      backgroundColor:"white",
                      elevation:7
                    }}>
                      <Text style={{color:"#3FC1C9", fontFamily:"NunitoBold", fontSize:14}}>03</Text>
                      <Text style={{color:"#3FC1C9", fontFamily:"NunitoRegular", fontSize:14}}>COMIDAS</Text>
                    </View>

                    
                    <View style={{
                      height:120, 
                      width:120, 
                      borderRadius:60,
                      alignItems:"center",
                      justifyContent:"center",
                      backgroundColor:"white",
                      elevation:7
                    }}>
                      <Text style={{color:"#FC5185", fontSize:23,  fontFamily:"NunitoBold",}}>100</Text>
                      <Text style={{color:"#FC5185", fontSize:14,  fontFamily:"NunitoRegular",}}>PASOS</Text>
                    </View>

                    
                    <View style={{
                      height:50, 
                      width:90, 
                      borderRadius:25,
                      alignItems:"center",
                      justifyContent:"center",
                      backgroundColor:"white",
                      elevation:7
                    }}>
                      <Text style={{color:"#3FC1C9", fontSize:14,  fontFamily:"NunitoBold",}}>05</Text>
                      <Text style={{color:"#3FC1C9", fontSize:14,  fontFamily:"NunitoRegular",}}>AGUA</Text>
                    </View>
                    
                  </View>    
                </View>

            
            </View>

            <View style={{flex:1, zIndex:1}}>
              <Card width="60%" height="2.5%" padding={20} alignItems="center" justifyContent="center">
                <Text style={{color:"#3FC1C9", fontSize:14,  fontFamily:"NunitoBold",}}>300 Calorias Quemadas</Text>
              </Card>
              
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: "space-between",
                marginLeft: "5%",
                marginRight: "5%",
              }}>            
                <Card 
                  width="50%" 
                  height={40} 
                  backgroundColor="#3FC1C9"  
                  paddingLeft={20} 
                  paddingRight={20} 
                  paddingBottom={20} 
                  paddingTop={20} 
                  alignItems="center" 
                  justifyContent="center"
                >
                  <Text style={{color:"white", fontSize:12,  fontFamily:"NunitoBold"}}>ACTUALIZAR PESO</Text>
                </Card>
                <Card 
                  width={40} 
                  height={40} 
                  backgroundColor="#3FC1C9"   
                  paddingLeft={20} 
                  paddingRight={20} 
                  paddingBottom={20} 
                  paddingTop={20} 
                  borderRadius={30} 
                  alignItems="center" 
                  justifyContent="center"
                >
                  <IconButton
                          icon="notifications-active"
                          color="white"
                          size={20}
                          onPress={() => console.log('Pressed')}
                        /> 
                </Card> 
              </View>   
          
              <Fecha />
              <AlarmaPrincipal/>                
              <Comidas/>    
              <Agua/>     
              <Alarmas/>    
              <DatosCardiovasculares/>  
              <Actividades/>       
              <ComoTeSientes/>  
            </View>



        </ScrollView>
    );
  }
}

export default connect(null)(Dashboard)