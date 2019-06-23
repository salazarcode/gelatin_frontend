import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView, Image} from 'react-native';
import { Surface, IconButton, Divider } from 'react-native-paper';
import { connect } from 'react-redux'

import CardFooter from './CardFooter'
import Chip from './Chip'
import Card from './MyCard'

import ImgRef from '../assets/img/imagen-referencial.png'

class Actividades extends React.Component 
{    
  render() {
    return (
      <Card width="90%" padding={20}>
        <View style={{height:80, width:"auto", flexDirection: 'row', padding: 10}}>
          <Image style={{height:70, width:75, marginRight:15, marginBottom:15}} source={ImgRef}/>
          <View styles={{height:100, width:"100%",flexDirection: 'column',justifyContent: 'center',}}>
            <Text style={{color:"#FC5185", fontSize:14,  fontFamily:"NunitoBold",}}>ACTIVIDADES</Text>
            <Text style={{color:"black", fontSize:12,  fontFamily:"NunitoRegular", width:180, flexWrap: 'wrap'}}>
              ¡Realiza las actividades que haz realizado hoy y determina cuanto haz avanzado!
            </Text>  
          </View>
        </View>

        <Divider style={{marginTop: 7.5, marginBottom:7.5, backgroundColor:"white"}} />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            width:"100%",
          }}
        >
          <Chip line1="Tiempo total" line2="120min"/>
          <Chip line1="Calorías quemadas" line2="1000 cal"/>
        </ScrollView>

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
export default connect(null)(Actividades)