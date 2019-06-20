import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView, Image} from 'react-native';
import { Surface, IconButton, Divider } from 'react-native-paper';
import { connect } from 'react-redux'
import aguaImg from '../../../assets/agua.jpg'

import Card from '../../dumbs/MyCard'

class Agua extends React.Component 
{    
  render() {
    return (
      <Card width="90%" padding="20">
        <View style={{height:100, width:"auto", flexDirection: 'row', padding: 10}}>
          <Image style={{height:100, width:100}} source={aguaImg}/>
          <View styles={{height:100, width:"100%",flexDirection: 'column',justifyContent: 'center',}}>
            <Text>AGUA</Text>
            <Text>¡Realiza un registro del agua que ingeriste</Text> 
            <Text>Hoy y asegúrat de estar hidratado!</Text>            
          </View>
        </View>

        <Divider style={{marginTop: 7.5, marginBottom:7.5}} />

        <Text style={{marginLeft:10, marginBottom:15, color:"navy", fontSize:14, fontWeight:"600"}}>Agregar un vaso de agua</Text> 
        
      </Card>
    );
  }
}
export default connect(null)(Agua)