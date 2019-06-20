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
        paddingBottom={10}
        backgroundColor="#364F6B"
      >
        <View style={{flexDirection: 'row', alignItems:"center", justifyContent:"space-between"}}>
          <Text style={{color:"white", fontSize:14,  fontFamily:"NunitoBold",}}>ALARMA: 04:30PM</Text>
          <CheckAlarm/>
        </View>

        <View style={{flexDirection: 'row', justifyContent:"space-between"}}>
          <Text style={{color:"white", fontSize:14,  fontFamily:"NunitoRegular",}}>CICLISMO POR LA MAÑANA</Text>
        </View>

        <Divider style={{marginTop: 10, marginBottom:7.5, backgroundColor:"white"}} />
        
        <View style={{flexDirection: 'row',alignItems:"center", justifyContent:"flex-start"}}>
          <Text style={{color:"white", fontSize:14,  fontFamily:"NunitoBold", marginRight:5}}>REPETIR</Text>
          <AlarmChip>5min</AlarmChip>
          <AlarmChip>10min</AlarmChip>
          <AlarmChip>15min</AlarmChip>
        </View>
      </Card>
    );
  }
}

export default AlarmasPrincipal