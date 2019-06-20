import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView, Image} from 'react-native';
import { Surface, IconButton, Divider } from 'react-native-paper';
import { connect } from 'react-redux'
import alarmImg from '../../../assets/alarm.png'

import Card from '../../dumbs/MyCard'

class Alarmas extends React.Component 
{    
  render() {
    return (
      <Card width="90%" padding="20">
        <View style={{height:100, width:"auto", flexDirection: 'row', padding: 10}}>
          <Image style={{height:100, width:100}} source={alarmImg}/>
          <View styles={{height:100, width:"100%",flexDirection: 'column',justifyContent: 'center',}}>
            <Text>Alarmas</Text>
            <Text>¡Agrega la alrma que necesitas y</Text>    
            <Text>Y lleva un control de tu tiempo!</Text>            
          </View>
        </View>

        <View style={{flexDirection: 'row', padding: 10, marginTop:10}}>
          <View style={{height:40, width:"auto", backgroundColor:"navy", marginLeft:5, marginRight:5}}>
            <Text styles={{color:"white", fontWeight:"400", fontSize: 9}}>Ciclismo Matutino</Text>
            <Text styles={{color:"white", fontWeight:"400", fontSize: 12}}>05:35pm</Text>
          </View>
          <View style={{height:40, width:"auto", backgroundColor:"navy", marginLeft:5, marginRight:5}}>
            <Text styles={{color:"white", fontWeight:"400", fontSize: 9}}>Ciclismo Matutino</Text>
            <Text styles={{color:"white", fontWeight:"400", fontSize: 12}}>05:35pm</Text>
          </View>
        </View>

        <Divider style={{marginTop: 7.5, marginBottom:7.5}} />

        <Text style={{marginLeft:10, marginBottom:15, color:"navy", fontSize:14, fontWeight:"600"}}>
          Agregar una comida
        </Text>         
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