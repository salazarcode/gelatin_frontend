import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView, Image} from 'react-native';
import { Surface, IconButton, Divider } from 'react-native-paper';
import { connect } from 'react-redux'
import CardFooter from '../../dumbs/CardFooter'


import cardioImg from '../../../assets/pngs/cardio.png'

import Card from '../../dumbs/MyCard'

class DatosCardiovasculares extends React.Component 
{    
  render() {
    return (
      <Card width="90%" padding={20}>
        <View style={{height:80, width:"auto", flexDirection: 'row', padding: 10}}>
          <Image style={{height:70, width:75, marginRight:15, marginBottom:15}} source={cardioImg}/>
          <View styles={{height:100, width:"100%",flexDirection: 'column',justifyContent: 'center',}}>
            <Text style={{color:"#FC5185", fontSize:14,  fontFamily:"NunitoBold",}}>DATOS CARDIOVASCULARES</Text>
            <Text style={{color:"black", fontSize:12,  fontFamily:"NunitoBold",}}>Agrega tus datos cardiovasculares</Text>
            <Text style={{color:"black", fontSize:12, fontFamily:"NunitoBold",}}>actuales y lleva el control</Text>
            <Text style={{color:"black", fontSize:12,  fontFamily:"NunitoBold",}}>de tu salud</Text>
          </View>
        </View>

        <Divider style={{marginTop: 7.5, marginBottom:7.5}} />

        <CardFooter texto="Agregar dato cardiovascular" onRightPressed={()=>console.log("Right Pressed")} onLeftPressed={()=>console.log("Left pressed")}/>
      </Card>
    );
  }
}


const theColor = "#3fc8ea";
const theElevation = 4;
const theSize = 200;

const styles = StyleSheet.create({

});
export default connect(null)(DatosCardiovasculares)