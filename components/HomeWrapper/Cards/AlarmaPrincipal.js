import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView, Image} from 'react-native';
import { Surface, IconButton, Divider } from 'react-native-paper';
import { connect } from 'react-redux'
import alarmImg from '../../../assets/alarm.png'
import CardFooter from '../../dumbs/CardFooter'
import AlarmChip from '../../dumbs/AlarmChip'
import Card from '../../dumbs/MyCard'
import CheckAlarm from '../../dumbs/CheckAlarm'

class AlarmasPrincipal extends React.Component 
{    
  render() {
    return (
      <Card 
        width="90%" 
        paddingLeft={20}
        paddingRight={20}
        paddingTop={10}
        paddingBottom={20}
        backgroundColor="#364F6B"
      >
        <View style={{flexDirection: 'row', alignItems:"center", justifyContent:"space-between"}}>
          <View style={{flexDirection:"row", alignItems:"center", justifyContent:"flex-start" }}>
            <IconButton
                icon="directions-bike"
                color="white"
                size={20}      
                style={{marginLeft:-6}}
            /> 
            <Text style={{color:"white", fontSize:18,  fontFamily:"NunitoBold", marginLeft:-10}}>CICLISMO</Text>
          </View>
          <CheckAlarm/>
        </View>
        
        <View style={{flexDirection: 'row',alignItems:"center", justifyContent:"flex-start"}}>
          <AlarmChip radius={5} margin={2}>Lu</AlarmChip>
          <AlarmChip radius={5} margin={2}>Ma</AlarmChip>
          <AlarmChip radius={5} margin={2}>Sa</AlarmChip>          
          <Text style={{color:"white", fontSize:14,  fontFamily:"NunitoBold", marginLeft:5}}>04:30PM</Text>
        </View>
      </Card>
    );
  }
}

export default AlarmasPrincipal