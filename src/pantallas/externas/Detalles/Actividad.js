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
import axios from 'axios'
import Actions from '../../../store/Actions'

function mapStateToProps(state){
  return {
    state: state
  }
}

class Actividad extends React.Component 
{    
    state = {     
      niveles: [],
      habitos: [],
      actividad_fisica_actual: "",
      actividad_fisica_meta: "",
      habitos_seleccionados: []
    }
    componentDidMount = async () => {    
      let {env, prod, dev} = this.props.state;
      let base = env == "PROD" ? prod : dev;
      let habitos = await axios.get(base + '/habits').then(res=>res.data);
      let niveles = await axios.get(base + '/levels').then(res=>res.data);
      this.setState({habitos:habitos, niveles:niveles});
    }

    static navigationOptions = {
        header: null
    }

    _PickSeleccionado = async (id) => {
      let {habitos, habitos_seleccionados} = this.state;
      
      let clicked = habitos.find(elem=>elem.id == id);
      
      let existeYa = habitos_seleccionados.find(elem=>elem.id == id);

      if(existeYa != undefined)
        await this.setState({habitos_seleccionados: habitos_seleccionados.filter(n=>n.id != id)});
      else
        await this.setState({habitos_seleccionados: [...habitos_seleccionados, clicked]}); 
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
                  type="dialog"
                  style={{
                    height: 40, 
                    width: "100%",
                    margin:5
                  }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({actividad_fisica_actual: itemValue})
                  }>
                    {this.state.niveles.map((item)=>(
                      <Picker.Item key={item.id.toString()} label={item.titulo.toString()} value={item.id} />
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
                  type="dialog"
                  style={{
                    height: 40, 
                    width: "100%",
                    margin:5
                  }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({actividad_fisica_meta: itemValue})
                  }>
                    {this.state.niveles.map((item)=>(
                      <Picker.Item key={item.id.toString()} label={item.titulo.toString()} value={item.id} />
                    ))}
                </Picker>              
              </View> 
            </View>

            <Text style={[sentences, {alignSelf: 'center',}]}>HÁBITOS</Text>
            {this.state.habitos.map((item)=>{
                return (
                  <TouchableOpacity
                    style={{
                      height:40,
                      width:"60%",
                      backgroundColor:this.state.habitos_seleccionados.find(n=>n.id == item.id) != undefined ? "navy" : "white",
                      elevation:4,
                      borderRadius:20,
                      alignSelf: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin:5
                    }}
                    key={item.id.toString()}
                    onPress={()=>this._PickSeleccionado(item.id)}
                  >
                    <Text style={{
                      color:this.state.habitos_seleccionados.find(n=>n.id == item.id) != undefined ? "white" : "black",
                      fontFamily:"NunitoRegular"
                    }}>{item.titulo}</Text>
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
              let {actividad_fisica_actual, actividad_fisica_meta, habitos_seleccionados} = this.state;
              let registro = this.props.state.autenticacion.registro;
              registro.actividad_fisica_actual = actividad_fisica_actual;
              registro.actividad_fisica_meta = actividad_fisica_meta;
              registro.habitos = habitos_seleccionados;
              this.props.dispatch(Actions.setRegistro(registro));
              console.log(this.props.state.autenticacion.registro)
              //this.props.navigation.navigate("CualEsTuObjetivo");
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