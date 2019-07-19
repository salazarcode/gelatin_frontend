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


import Wrapper from './Wrapper'
import axios from 'axios'
import { connect } from 'react-redux'
import BackButton from '../../../componentes/BackButton'
import Footer from './Footer'
import Actions from "../../../store/Actions";

function mapStateToProps(state){
  return {
    objetivos: state.objetivos,
    colores: state.colores,
    state:state
  }
}

function mapDispatchToProps(dispatch)
{
  return {
    setRegistro: (variable, valor) => dispatch(Actions.setRegistro(variable, valor)),
  };
}

class CualEsTuObjetivo extends React.Component 
{    
    state = {
      objetivos: [],
      seleccionados: []
    }
    static navigationOptions = {
        header: null
    }    
    constructor(props)
    {
      super(props);
      this._PickSeleccionado.bind(this);
    }
    componentDidMount = async () => {   
      let {env, prod, dev} = this.props.state;
      let base = env == "PROD" ? prod : dev;
      let objetivos = await axios.get(base + '/objectives').then(res=>res.data);
      this.setState({objetivos:objetivos});
    }

    _PickSeleccionado = async (id) => {
      let {objetivos, seleccionados} = this.state;
      
      let clicked = objetivos.find(elem=>elem.id == id);
      
      let existeYa = seleccionados.find(elem=>elem.id == id);

      if(existeYa != undefined)
        await this.setState({seleccionados: seleccionados.filter(n=>n.id != id)});
      else
        await this.setState({seleccionados: [...seleccionados, clicked]}); 
    }

    render() {  
      if(this.state.objetivos.length == 0)
      {
        return (
          <View style={{flex:1, backgroundColor:"ivory", alignItems: 'center', justifyContent: 'center',}}>
            <Text style={{fontFamily:"NunitoBold"}}>Gelatin. Loading...</Text>
          </View>
        )
      }
      else
      {
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
                      backgroundColor:this.state.seleccionados.find(n=>n.id == item.id) != undefined ? "navy" : "white",
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
                      color:this.state.seleccionados.find(n=>n.id == item.id) != undefined ? "white" : "black",
                      fontFamily:"NunitoRegular"
                    }}>{item.titulo}</Text>
                  </TouchableOpacity>
                )
              })}

              <TouchableOpacity 
                style={{
                  height:50,
                  width:"40%",
                  backgroundColor:this.props.colores.azulClaro,
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent:"center",
                  marginTop:10, 
                  marginBottom: 30,
                  borderRadius:25
                }}
                onPress={()=>{
                  this.props.setRegistro("objetivos", this.state.seleccionados);
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
  }

export default connect(mapStateToProps, mapDispatchToProps)(CualEsTuObjetivo)