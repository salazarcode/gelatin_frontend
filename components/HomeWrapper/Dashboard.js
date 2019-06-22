import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView, ImageBackground, Image } from 'react-native';
import { Surface, IconButton, Divider, Badge } from 'react-native-paper';
import { connect } from 'react-redux'
import moment from 'moment-with-locales-es6'

import Chip from '../dumbs/Chip'
import Card from '../dumbs/MyCard'
import MainHeader from '../dumbs/MainHeader'

import Actividades from './Cards/Actividades'
import Sugerencias from './Cards/Sugerencias'
import ComoTeSientes from './Cards/ComoTeSientes'
import Comidas from './Cards/Comidas'
import Agua from './Cards/Agua'
import DatosCardiovasculares from './Cards/DatosCardiovasculares'
import AlarmaPrincipal from './Cards/AlarmaPrincipal'
import Fecha from './Cards/Fecha'



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
            
            <MainHeader/>

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
              <Sugerencias/>  
              <AlarmaPrincipal/>                
              <Comidas/>    
              <Agua/>     
              <DatosCardiovasculares/>  
              <Actividades/>       
            </View>



        </ScrollView>
    );
  }
}

export default connect(null)(Dashboard)