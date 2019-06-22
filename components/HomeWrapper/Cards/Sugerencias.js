import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image, TouchableOpacity} from 'react-native';
import { IconButton, Divider } from 'react-native-paper';
import CardSugerencia from './CardSugerencia'

class Sugerencias extends React.Component 
{    
  render() {
    return (
      <View style={{
        height: 230,
        widht: "100%",
        justifyContent:"flex-start",
        backgroundColor: "transparent",
        marginTop: 10,
        paddingLeft: 12,      
      }}>
        <Text style={{color:"#fc5185", fontFamily:"NunitoBold", fontSize:16}}>TENDENCIA EN GELATIN</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            width:"100%",
            marginTop: 10,
          }}
        >
        <CardSugerencia 
          bg="navy" 
          image={require('../../../assets/pngs/foto-comida.jpg')} 
          texto="Una larga oración que debe poder separar en partes"/>
        <CardSugerencia 
          bg="pink" 
          image={require('../../../assets/pngs/foto-comida.jpg')} 
          texto="Una larga oración que debe poder separar en partes"/>
        <CardSugerencia 
          bg="orange" 
          image={require('../../../assets/pngs/foto-comida.jpg')} 
          texto="Una larga oración que debe poder separar en partes"/>
        </ScrollView>
        
        <TouchableOpacity onPress={()=>console.log("Ver más sugerencias")}>
          <Divider style={{marginTop:10, marginBottom:5}}/>
          <View style={{height:50, width:"100%", flexDirection:"row", alignItems:"center", justifyContent:"flex-end"}}>
            <Text style={{color:"#3FC1C9", fontFamily:"NunitoBold", fontSize:12}}>Ver todas las recomendaciones</Text>
            <IconButton
                    icon="chevron-right"
                    color="#3FC1C9"
                    size={30}
                    style={{marginLeft:-5}}  
                /> 
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

export default Sugerencias