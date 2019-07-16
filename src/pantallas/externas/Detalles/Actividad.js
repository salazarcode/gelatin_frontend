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

class Actividad extends React.Component 
{    
    state = {     
      niveles: [
        "Bajo",
        "Moderado",
        "Intenso",
        "Muy intenso"
      ],
      habitos: [
        {id:1, titulo:"Correr todas las mañanas", active:false},
        {id:2, titulo:"Trotar en la mañana", active:false},
        {id:3, titulo:"No tomar desayuno", active:false},
      ]
    }
    static navigationOptions = {
        header: null
    }

    render() {  
      let sentences = {
        fontFamily:"NunitoRegular", 
        fontSize:12, 
      };
      
      let pickWrapper = {
        borderRadius: 20,
        height:40,
        width: "80%",
        backgroundColor:"white",
        elevation:4,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent:"center",
        paddingLeft:10, 
      };
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
              Actividad
            </Text>

            <View
            style={{
              width:"80%",
              height:40,
              marginTop:20,
              marginBottom:15,
              flexDirection: 'column',
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
              <Text style={sentences}>ESTADO DE ACTIVIDAD FÍSICA ACTUAL</Text>
              <View style={pickWrapper}>
                <Picker
                  selectedValue={this.state.actividad_fisica_actual}
                  type="dialog"
                  style={{
                    height: 40, 
                    width: "100%",
                    margin:5,
                    fontFamily:"NunitoRegular",
                  }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({actividad_fisica_actual: itemValue})
                  }>
                    {this.state.niveles.map((item)=>(
                      <Picker.Item key={item.toString()} label={item.toString()} value={item.toString()} />
                    ))}
                </Picker>              
              </View> 
            </View>


            <View
            style={{
              width:"80%",
              height:40,
              marginTop:20,
              marginBottom:15,
              flexDirection: 'column',
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
              <Text style={sentences}>ESTADO DE ACTIVIDAD FÍSICA META</Text>
              <View style={pickWrapper}>
                <Picker
                  selectedValue={this.state.actividad_fisica_meta}
                  type="dialog"
                  style={{
                    height: 40, 
                    width: "100%",
                    margin:5,
                    fontFamily:"NunitoRegular",
                  }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({actividad_fisica_meta: itemValue})
                  }>
                    {this.state.niveles.map((item)=>(
                      <Picker.Item key={item.toString()} label={item.toString()} value={item.toString()} />
                    ))}
                </Picker>              
              </View> 
            </View>

            

            <View
            style={{
              width:"80%",
              height:40,
              marginTop:20,
              marginBottom:15,
              flexDirection: 'column',
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
              <Text style={sentences}>HÁBITOS</Text>
              <View style={pickWrapper}>
                <Picker
                  selectedValue={this.state.habitos}
                  type="dialog"
                  style={{
                    height: 40, 
                    width: "100%",
                    margin:5,
                    fontFamily:"NunitoRegular",
                  }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({habitos: itemValue})
                  }>
                    {this.state.habitos.map((item)=>(
                      <Picker.Item key={item.id.toString()} label={item.titulo} value={item.id.toString()} />
                    ))}
                </Picker>              
              </View> 
            </View>

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
              this.props.navigation.navigate("CualEsTuObjetivo");
            }}
          >
            <Text style={{fontFamily:"NunitoBold", fontSize:20, color:"white"}}>Listo</Text>
          </TouchableOpacity>            
   
            <Footer />    
          </ScrollView>   
        </Wrapper>        
      );
    }
  }

export default connect(mapStateToProps)(Actividad)