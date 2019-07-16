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
import {Button} from 'react-native-paper' 
import Wrapper from './Wrapper'
import { connect } from 'react-redux'
import BackButton from '../../../componentes/BackButton'
import Footer from './Footer'

function mapStateToProps(state){
  return {
    state: state
  }
}

class DatosPersonales extends React.Component 
{    
    state = {
      sexo : undefined,
      nombre:undefined,
      edad: undefined
    }
    static navigationOptions = {
        header: null
    }

    IntArray = (start, end) => {
      let arr = [];
      for(let n = start; n <= end; n++)
        arr.push(n);
        return arr;
    }

    render() {  
      let edades = this.IntArray(18, 130).map((item)=>{
        return <Picker.Item key={item.toString()} label={item.toString()} value={item.toString()} />
      });

      let estaturas = this.IntArray(100, 200).map((item)=>{
        return <Picker.Item key={item.toString()} label={item.toString()} value={item.toString()} />
      });

      return (
        <Wrapper>
          <ScrollView style={{flex:1}}>
            <BackButton />
            <Image
              style={{
                width: "100%",
                height:400
              }}
              source={require("../../../assets/img/imagen-referencial.png")} />
            <Text style={{fontFamily:"NunitoBold", fontSize:30, alignSelf: 'center', marginTop:10, marginBottom:10}}>Datos personales</Text>
            <View style={{
              width:"100%",
              height:"auto",
              backgroundColor:"transparent",
              flexDirection: 'row',
              marginTop:10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Text style={{fontFamily:"NunitoRegular", fontSize:12, margin:5}}>HOMBRE</Text>
              <TouchableOpacity
                style={{
                  height:20,
                  width:40,
                  borderRadius:10,
                  marginLeft:5,                  
                  backgroundColor:this.state.sexo == "HOMBRE" ? this.props.state.colores.azulClaro : "silver"
                }}
                onPress={()=>this.setState({sexo:"HOMBRE"})}
              ></TouchableOpacity>
              
              <TouchableOpacity
                style={{
                  height:20,
                  width:40,
                  borderRadius:10,
                  marginLeft:3,
                  marginRight:5,               
                  backgroundColor:this.state.sexo == "MUJER" ? this.props.state.colores.azulClaro : "silver"
                }}
                onPress={()=>this.setState({sexo:"MUJER"})}
              ></TouchableOpacity>
              <Text style={{fontFamily:"NunitoRegular", fontSize:12, margin:5}}>MUJER</Text>
            </View>

            <TextInput
              style={{
                height: 40, 
                width:"80%",
                borderRadius:20,
                margin:5,
                elevation:4,
                backgroundColor: 'white', 
                alignSelf: 'center',
                paddingLeft:10

              }}
              onChangeText={(text) => this.setState({nombre:text})}
              value={this.state.nombre}
              placeholder="NOMBRE"
            />



          
          <View style={{
            width:"80%",
            height:80,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent:"space-between",
            alignSelf:"center",
          }}>
            <View style={{
              height:40,
              width: "45%",
              alignItems: 'center',
              justifyContent:"center",
            }}>
              <Text style={{fontFamily:"NunitoRegular", fontSize:12, alignSelf: 'center', marginBottom:5}}>EDAD</Text>
              <View style={{
                borderRadius: 20,
                height:40,
                width: "100%",
                backgroundColor:"white",
                elevation:4,
                overflow: 'hidden',
                alignItems: 'center',
                justifyContent:"center",
                paddingLeft:10
              }}>
                <Picker
                  selectedValue={this.state.edad}
                  style={{
                    height: 40, 
                    width: "100%",
                    margin:5,
                    fontFamily:"NunitoRegular"
                  }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({edad: itemValue})
                  }>
                    {edades}
                </Picker>              
              </View>              
            </View>



            <View style={{
              height:40,
              width: "45%",
              alignItems: 'center',
              justifyContent:"center",
            }}>
              <Text style={{fontFamily:"NunitoRegular", fontSize:12, alignSelf: 'center', marginBottom:5}}>ESTATURA (cms)</Text>
              <View style={{
                borderRadius: 20,
                height:40,
                width: "100%",
                backgroundColor:"white",
                elevation:4,
                overflow: 'hidden',
                alignItems: 'center',
                justifyContent:"center",
                paddingLeft:10
              }}>
              <Picker
                selectedValue={this.state.estatura}
                style={{
                  height: 40, 
                  width: "100%",
                  margin:5,
                  fontFamily:"NunitoRegular"
                }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({estatura: itemValue})
                }>
                  {estaturas}
              </Picker>     
              </View>         
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

export default connect(mapStateToProps)(DatosPersonales)