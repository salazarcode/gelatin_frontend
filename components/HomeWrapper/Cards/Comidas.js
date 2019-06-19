import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView, Image} from 'react-native';
import { Surface, IconButton, Divider } from 'react-native-paper';
import { connect } from 'react-redux'
import hamburguesaImg from '../../../assets/hamburger.jpg'

import Card from '../../dumbs/MyCard'

class Comidas extends React.Component 
{    
  render() {
    return (
        <Card>
          <View style={{height:100, width:"auto", flexDirection: 'row', padding: 10}}>
            <Image style={{height:100, width:100}} source={hamburguesaImg}/>
            <View styles={{height:100, width:"100%",flexDirection: 'column',justifyContent: 'center',}}>
              <Text>COMIDAS</Text>
              <Text>¡Realiza un registro de lo que comiste</Text>  
              <Text>Hoy de forma interactiva!</Text>            
            </View>
          </View>

          <View style={{flexDirection: 'row', padding: 10, marginTop:10}}>
            <Image style={{height:80, width:80,}} source={hamburguesaImg}/>
            <Image style={{height:80, width:80, marginLeft:5}} source={hamburguesaImg}/>
            <Image style={{height:80, width:80, marginLeft:5}} source={hamburguesaImg}/>
          </View>

          <Divider style={{marginTop: 7.5, marginBottom:7.5}} />

          <Text style={{marginLeft:10, marginBottom:15, color:"navy", fontSize:14, fontWeight:"600"}}>Agregar una comida</Text> 
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