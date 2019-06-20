import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView} from 'react-native';
import { Surface, IconButton, Divider, Badge } from 'react-native-paper';
import { connect } from 'react-redux'

import Chip from '../dumbs/Chip'
import Card from '../dumbs/MyCard'

import Actividades from './Cards/Actividades'
import ComoTeSientes from './Cards/ComoTeSientes'
import Comidas from './Cards/Comidas'
import Agua from './Cards/Agua'
import DatosCardiovasculares from './Cards/DatosCardiovasculares'
import Alarmas from './Cards/Alarmas'
import Header from './Cards/Header'
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
      <ScrollView style={{ flex:1, flexDirection: "column", backgroundColor: "#f5f5f5"}}>
 
        <Header/>

        <Card width="60%" height="3%" padding={20} alignItems="center" justifyContent="center">
          <Text>300 Calorias Quemadas</Text>
        </Card>
        
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: "space-between",
          marginLeft: "5%",
          marginRight: "5%"
        }}>            
          <Card width="50%" height={40} backgroundColor="#3FC1C9"  padding={20} alignItems="center" justifyContent="center">
            <Text style={{color:"white", fontSize:12, fontWeight: "700"}}>ACTUALIZAR PESO</Text>
          </Card>
          <Card width={40} height={40} backgroundColor="#3FC1C9" padding={20} borderRadius={30} alignItems="center" justifyContent="center">
            <IconButton
                    icon="notifications-active"
                    color="white"
                    size={20}
                    onPress={() => console.log('Pressed')}
                  /> 
          </Card> 

        </View>   
        
        <Fecha/>

        <View styles={{
          flex: 1,
          flexDirection: 'row',
          alignItems: "center",
        }}>
          <Surface style={{marginTop: 10, marginLeft: 20, marginRight: 20, marginBottom: 10,width: "90%", elevation:theElevation, borderRadius:20, height: 100, backgroundColor: '#062f70',  alignSelf: "center", padding: 20}} >
            <Text style={{color:"white", fontWeight:"600", fontSize: 14}}>Alarma: 04:30PM</Text>
            <Text style={{color:"white", fontWeight:"400", fontSize: 14}}>Ciclismo por la mañana</Text>
            <Divider style={{ backgroundColor: 'white', marginTop: 5, marginBottom:5 }}/>
            <View style={{flex: 1, flexDirection: 'row'}}>

              <View style={{ 
                  width: 60, 
                  height: 20, 
                  justifyContent: 'center',
                  alignItems: 'center'         
              }}>
                  <Text style={{color:"white"}}>Repetir</Text>
              </View>

              <Chip texto="5min" fontColor="white" bgColor="#062f70"/>
              <Chip texto="10min" fontColor="white" bgColor="blue"/>
              <Chip texto="15min" fontColor="white" bgColor="#062f70"/>
            </View>
          </Surface>   
        </View>
                
        <Comidas/>    
        <Agua/>     
        <Alarmas/>    
        <DatosCardiovasculares/>  
        <Actividades/>       
        <ComoTeSientes/>        

      </ScrollView>
    );
  }
}

export default connect(null)(Dashboard)