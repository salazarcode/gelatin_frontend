import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView, Image} from 'react-native';
import { Surface, IconButton, Divider } from 'react-native-paper';
import { connect } from 'react-redux'
import aguaImg from '../../../assets/pngs/agua.png'

import CardFooter from '../../dumbs/CardFooter'

import Card from '../../dumbs/MyCard'

class Agua extends React.Component 
{    
  render() {
    return (
      <Card width="90%" padding={20}>
        <View style={{height:80, width:"auto", flexDirection: 'row', padding: 10}}>
          <Image style={{height:70, width:70, marginRight:15, marginBottom:15}} source={aguaImg}/>
          <View styles={{height:100, width:"100%",flexDirection: 'column',justifyContent: 'center',}}>
            <Text style={{color:"#FC5185", fontSize:14,  fontFamily:"NunitoBold",}}>AGUA</Text>
            <Text style={{color:"black", fontSize:12,  fontFamily:"NunitoRegular", width:180, flexWrap: 'wrap'}}>
              ¡Realiza un registro del agua que ingeriste hoy y asegúrate de estar hidratado!
            </Text>  
          </View>
        </View>

        <Divider style={{marginTop: 7.5, marginBottom:7.5}} />
        <CardFooter texto="Agregar agua" onRightPressed={()=>console.log("Right Pressed")} onLeftPressed={()=>console.log("Left pressed")}/>
      </Card>
    );
  }
}
export default connect(null)(Agua)