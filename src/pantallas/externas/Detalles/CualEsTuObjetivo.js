import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput,
  View, 
  Picker,
  ScrollView, 
  TouchableOpacity,
  Image
} from 'react-native';

import {
  Button
} from 'react-native-paper' 

import Wrapper from './Wrapper'
import { connect } from 'react-redux'
import BackButton from '../../../componentes/BackButton'
import Footer from './Footer'

function mapStateToProps(state){
  return {
    state: state
  }
}

class CualEsTuObjetivo extends React.Component 
{    
    state = {
      objetivos: [
        {id:1, texto: "BAJAR DE PESO", active:false},
        {id:2, texto: "CORRER UN MARATÓN", active:false},
        {id:3, texto: "NORMALIZAR DIÁBETES", active:false},
      ]      
    }
    static navigationOptions = {
        header: null
    }

    render() {  
      return (
        <Wrapper>
          <ScrollView style={{flex:1}}>
            <BackButton nav={this.props.navigation}/>
            <Image
              style={{
                width: "100%",
                height:400
              }}
              source={require("../../../assets/img/imagen-referencial.png")} 
            />
            <Text style={{fontFamily:"NunitoBold", fontSize:30, alignSelf: 'center', marginTop:10, marginBottom:10}}>
              ¿Cual es tu objetivo?
            </Text>
            
            {this.state.objetivos.map((item)=>{
              return (
                <TouchableOpacity
                  style={{
                    height:40,
                    width:"60%",
                    backgroundColor:item.active ? this.props.state.colores.azulOscuro : "white",
                    elevation:4,
                    borderRadius:20,
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin:5
                  }}
                  key={item.id.toString()}
                  onPress={()=>{
                    let {objetivos} = this.state;
                    let index = objetivos.findIndex((elem)=>elem.id == item.id);
                    objetivos[index].active = !(objetivos[index].active)
                    this.setState({objetivos: objetivos});                
                  }}
                >
                  <Text style={{
                    color:item.active ? "white" : "black",
                    fontFamily:"NunitoRegular"
                  }}>{item.texto}</Text>
                </TouchableOpacity>
              )
            })}

          <TouchableOpacity 
            style={{
              height:50,
              width:"40%",
              backgroundColor:this.props.state.colores.azulClaro,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent:"center",
              marginTop:10, 
              marginBottom: 30,
              borderRadius:25
            }}
            onPress={()=>{
              this.props.navigation.navigate("Peso");
            }}
          >
            <Text style={{fontFamily:"NunitoBold", fontSize:20, color:"white"}}>Siguiente</Text>
          </TouchableOpacity>            
   
            <Footer />    
          </ScrollView>   
        </Wrapper>        
      );
    }
  }

export default connect(mapStateToProps)(CualEsTuObjetivo)