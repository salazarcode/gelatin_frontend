import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView, Image} from 'react-native';
import { Surface, IconButton, Divider } from 'react-native-paper';
import { connect } from 'react-redux'
import alarmImg from '../../../assets/alarm.png'
import CardFooter from '../../dumbs/CardFooter'
import Chip from '../../dumbs/Chip'

import Card from '../../dumbs/MyCard'

class Alarmas extends React.Component 
{    
  render() {
    return (
      <Card width="90%" padding={20}>
        <View style={{height:100, width:"auto", flexDirection: 'row', padding: 10}}>
          <Image style={{height:100, width:80, marginRight:10}} source={alarmImg}/>
          <View styles={{height:100, width:"100%",flexDirection: 'column',justifyContent: 'center',}}>
            <Text style={{color:"#FC5185", fontSize:14,  fontFamily:"NunitoBold",}}>ALARMAS</Text>
            <Text style={{color:"black", fontSize:12,  fontFamily:"NunitoBold",}}>¡Agrega la alarma que</Text>    
            <Text style={{color:"black", fontSize:12,  fontFamily:"NunitoBold",}}>necesitas y lleva un control</Text>     
            <Text style={{color:"black", fontSize:12,  fontFamily:"NunitoBold",}}>control de tu tiempo!</Text>            
          </View>
        </View>

        <View style={{flexDirection: 'row', padding: 10, marginTop:10}}>
          <Chip  line1="Ciclismo Matutino" line2="05:35pm" />
          <Chip  line1="Correr" line2="06:30am" />
        </View>

        <Divider style={{marginTop: 7.5, marginBottom:7.5}} />
        <CardFooter texto="Agregar alarma" onRightPressed={()=>console.log("Right Pressed")} onLeftPressed={()=>console.log("Left pressed")}/>
      </Card>
    );
  }
}


const theColor = "#3fc8ea";
const theElevation = 4;
const theSize = 200;

const styles = StyleSheet.create({
  WrapperView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center"          
  },
  WrapperSurface: { 
    marginTop: 10, 
    marginLeft: 20, 
    marginRight: 20, 
    marginBottom: 10,
    width: "90%", 
    elevation:theElevation, 
    borderRadius:20, 
    height: theSize, 
    backgroundColor: 'white', 
    padding: 20, 
    alignSelf: "center"},
  Text: {
    color:theColor, 
    fontWeight:"400", 
    fontSize: 16
  }
});
export default connect(null)(Alarmas)