import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView} from 'react-native';
import { Surface, IconButton, Divider, Badge } from 'react-native-paper';
import { connect } from 'react-redux'
import Chip from '../dumb/Chip'



import Actividades from './Cards/Actividades'
import ComoTeSientes from './Cards/ComoTeSientes'
import Comidas from './Cards/Comidas'
import Agua from './Cards/Agua'
import DatosCardiovasculares from './Cards/DatosCardiovasculares'
import Alarmas from './Cards/Alarmas'
import Header from './Cards/Header'
import Fecha from './Cards/Fecha'

class Dashboard extends React.Component 
{    
  render() {
    const theColor = "#3fc8ea";
    const theElevation = 4;
    const theSize = 200;
    return (
      <ScrollView style={{ flex:1, flexDirection: "column", backgroundColor: "#f4f5f7"}}>
 
        <Header/>

        <View styles={{
          flex: 1,
          flexDirection: 'row',
          alignItems: "center"
        }}>
          <Surface style={{marginTop: 10, width: "60%", elevation:theElevation, borderRadius:50, height: 45, backgroundColor: "white", justifyContent: "center", alignItems: "center", alignSelf: "center"}} >
            <Text style={{color:theColor, fontWeight:"500", fontSize: 16}}>300 calorías quemadas</Text>
          </Surface>   
        </View>
        
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10, marginLeft: 20, marginRight: 20, marginBottom: 10,
        }}>
          <Surface style={{width: 155, elevation:theElevation, borderRadius:50, height: 30, backgroundColor: theColor, justifyContent: "center", alignItems: "center", alignSelf: "center"}} >
            <Text style={{color:"white", fontWeight:"500", fontSize: 10}}>ACTUALIZAR PESO</Text>
          </Surface>  
          <Surface style={{width: 30, elevation:theElevation, borderRadius:50, height: 30, backgroundColor: theColor, justifyContent: "center", alignItems: "center", alignSelf: "center"}} >
            <IconButton
                icon="notifications-active"
                color="white"
                size={20}
                onPress={() => console.log('Pressed')}
              />    
          </Surface>  
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
const styles = StyleSheet.create({
  SurfaceAlarmBtn: {
    position: 'absolute', 
    height:35, 
    width:35, 
    right: 0, 
    borderRadius:20, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: "white",
    elevation: 7
  },
  container: {
    flex:1,
    display: "flex",
    flexDirection: "column"
  },
  headerAll: {    
    width: "100%",
    padding: 20
  },
  titulosView: {
    height: "10%",
    width: "100%"
  },
  headerT:{
    color:"white",
    fontWeight: "800"
  },
  caja_1: {
    padding: 20,
    backgroundColor: "#3fc8ea",
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cajitas_laterales: {
    width: 95, 
    height: 50,
    backgroundColor: "white",
    borderRadius: 50,
    elevation: 7, 
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cajita_central: {
    width: 110, 
    height: 110,
    backgroundColor: "white",
    borderRadius: 70,
    elevation: 7, 
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoCentral: {
    color:"red",
    textAlign: "center",
    fontWeight:"800"
  },

  SurfaceCalorias:{
    width: "60%",
    height: "12%",
    margin: 10,
    padding: 10,
    elevation: 7,
    alignSelf: "center",
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SurfaceAlarmas:{
    width: "100%",
    height: "12%",
    margin: 20,
    padding: 5,
    elevation: 7,
    alignSelf: "center",
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  CaloriasText: {
    color: "#3fc8ea",
    fontWeight: "800"
  }

});
export default connect(null)(Dashboard)