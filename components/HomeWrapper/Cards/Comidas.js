import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView, Image,TouchableOpacity } from 'react-native';
import { Surface, IconButton, Divider } from 'react-native-paper';
import { connect } from 'react-redux'
import hamburguesaImg from '../../../assets/pngs/comidas.png'
import fotoComidaImg from '../../../assets/pngs/foto-comida.jpg'

import CardFooter from '../../dumbs/CardFooter'

import Card from '../../dumbs/MyCard'



class Comidas extends React.Component 
{    
  render() {
    return (
        <Card width="90%" padding={20}>
          <View style={{height:100, width:"auto", flexDirection: 'row', padding:10}}>
            <Image style={{height:70, width:70, marginRight:15}} source={hamburguesaImg}/>
            <View styles={{height:70, width:"100%",flexDirection: 'column', justifyContent: 'center'}}>
              <Text style={{color:"#FC5185", fontSize:14,  fontFamily:"NunitoBold",}}>COMIDA</Text>
              <Text style={{color:"black", fontSize:12,  fontFamily:"NunitoBold",}}>¡Realiza un registro de lo que</Text>  
              <Text style={{color:"black", fontSize:12,  fontFamily:"NunitoBold",}}>comiste hoy de forma interactiva!</Text>  
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image style={{height:80, width:80, borderRadius: 15}} source={fotoComidaImg}/>
            <Image style={{height:80, width:80, marginLeft:5, borderRadius: 15}} source={fotoComidaImg}/>
            <Image style={{height:80, width:80, marginLeft:5, borderRadius: 15}} source={fotoComidaImg}/>
          </View>

          <Divider style={{marginTop: 7.5, marginBottom:7.5}} />

          <CardFooter texto="Agregar comida" onRightPressed={()=>console.log("Right Pressed")} onLeftPressed={()=>console.log("Left pressed")}/>
        </Card>
    );
  } 
}


const theColor = "#3fc8ea";
const theElevation = 4;
const theSize = 200;

const styles = StyleSheet.create({
});
export default connect(null)(Comidas)