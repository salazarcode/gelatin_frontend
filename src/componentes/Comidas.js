import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView, Image,TouchableOpacity } from 'react-native';
import { Surface, IconButton, Divider, Paragraph } from 'react-native-paper';
import { connect } from 'react-redux'

import CardFooter from './CardFooter'
import Card from './MyCard'

import hamburguesaImg from '../assets/img/comidas.png'
import fotoComidaImg from '../assets/img/foto-comida.jpg'

class Comidas extends React.Component 
{
  render() {
    return (
        <Card width="90%" padding={20}>
          <View style={{height:100, width:"auto", flexDirection: 'row', padding:10}}>
            <Image style={{height:70, width:70, marginRight:15}} source={hamburguesaImg}/>
            <View styles={{height:70, width:"100%",flexDirection: 'column', justifyContent: 'center'}}>
              <Text style={{color:"#FC5185", fontSize:14,  fontFamily:"NunitoBold",}}>COMIDA</Text>
              <Text style={{color:"black", fontSize:12,  fontFamily:"NunitoRegular", width:180, flexWrap: 'wrap'}}>
                ¡Realiza un registro de lo que comiste hoy de forma interactiva!
              </Text>  
            </View>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              width:"100%",
            }}
          >
            <Image style={{height:80, width:80, marginLeft:5, borderRadius: 15}} source={fotoComidaImg}/>
            <Image style={{height:80, width:80, marginLeft:5, borderRadius: 15}} source={fotoComidaImg}/>
            <Image style={{height:80, width:80, marginLeft:5, borderRadius: 15}} source={fotoComidaImg}/>
            <Image style={{height:80, width:80, marginLeft:5, borderRadius: 15}} source={fotoComidaImg}/>
            <Image style={{height:80, width:80, marginLeft:5, borderRadius: 15}} source={fotoComidaImg}/>
            <Image style={{height:80, width:80, marginLeft:5, borderRadius: 15}} source={fotoComidaImg}/>
          </ScrollView>

          <Divider style={{marginTop: 7.5, marginBottom:7.5}} />

          <CardFooter texto="Agregar comida" onRightPressed={()=>console.log("Right Pressed")} onLeftPressed={()=>console.log("Left pressed")}/>
        </Card>
    );
  } 
}

export default connect(null)(Comidas)