import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Platform } from 'react-native';
import {Button,Checkbox} from 'react-native-paper'
import { connect } from 'react-redux'
import axios from 'axios'

import BackButton from './dumbs/BackButton'
import FooterIniciarSesion from './dumbs/FooterIniciarSesion'

function mapStateToProps(state){
  return {
    state: state
  }
}

class Register extends React.Component 
{        
  static navigationOptions = {
      header: null
  }
  constructor(props) {
    super(props);
    this.state = {
      correo: "",
      password: "",
      isLoading: false,
      token: "",
      checked1: false,
      checked2: false
    };
  }  

  render() {
    return (
      <View style={{flex:1, alignItems:"center", justifyContent:"center", backgroundColor:this.props.state.colores.fondo}}> 
        <BackButton goBack={this.props.navigation}/>
        
        <Image
          style={{width: 50, height:50, marginTop:10, marginBottom:20}}
          source={require('../assets/logo.png')}
        />

        <View style={{width:"100%", marginTop:"2%", marginBottom:"2%", height:"auto", alignItems:"center", justifyContent:"center"}}>
          <Text style={{fontFamily:"NunitoBold", fontSize:30}}>Crear una cuenta</Text>
        </View>
        
        <View style={{width:"100%", marginTop:"2%", marginBottom:"2%", height:"auto", alignItems:"center", justifyContent:"center"}}>
          <Text style={{fontFamily:"NunitoRegular", fontSize:12}}>O CREALA CON UUNA CUENTA DE CORREO</Text>
        </View>

        <View style={{
          width:"100%", 
          paddingLeft: "10%",
          paddingRight: "10%",
          marginTop: 10,
          height:"auto", 
          flexDirection: "row",
          alignItems:"center", 
          justifyContent:"space-between"
        }}>
          <Button  
            mode="contained" 
            contentStyle={{
              height: 30,
              width: 140
            }} 
            style={{
              borderRadius:15,
              elevation:7
            }}
            color="#3b5998"
            onPress={() => {console.log("login con facebook")}}
          >
              <Text style={{fontFamily: "NunitoBold", fontSize:20, color:"white"}}>f</Text>
          </Button>
          
          <Button  
            mode="contained" 
            contentStyle={{
              height: 30,
              width: 140
            }} 
            style={{
              borderRadius:15,
              elevation:7
            }}
            color="#db4a39"
            onPress={() => {console.log("login con google")}}
          >
            <Text style={{fontFamily: "NunitoBold", fontSize:20, color:"white"}}>G</Text>
          </Button>
        </View>

        
        <View style={{width:"100%", marginTop:"6%", marginBottom:"2.5%", height:"auto", alignItems:"center", justifyContent:"center"}}>
          <Text style={{fontFamily:"NunitoRegular", fontSize:12}}>O CREA UNA CUENTA CON TU CORREO</Text>
        </View>

        <TextInput
          style={{
            height: 40, 
            width: "100%",
            marginLeft:"20%",
            marginRight:"20%",
            paddingLeft:10,
            borderRadius:20,
            backgroundColor:"white",
            elevation:7,
            fontFamily:"NunitoRegular",
            fontSize: 12
          }}
          onChangeText={(text) => {this.setState({correo:text})}}
          placeholder="CORREO"
        />

        <TextInput
          style={{
            height: 45, 
            width: "100%",
            marginLeft:"20%",
            marginRight:"20%",
            marginTop:"3%",
            paddingLeft:10,
            borderRadius:22.5,
            backgroundColor:"white",
            elevation:7,
            fontFamily:"NunitoRegular",
            fontSize: 12
          }}
          onChangeText={(text) => {this.setState({password:text})}}
          secureTextEntry={true}
          placeholder="PASSWORD"
        />

        <View style={{
          width:"70%",
          height:50,
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"center"
        }}>
          <Checkbox
            status={this.state.checked1 ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checked1: !this.state.checked1 }); }}
          />
          <Text style={{fontFamily:"NunitoRegular", fontSize:10, flexWrap:"wrap"}}>
            Me gustaría recibir ofertas especiales y noticias de GELATIN APP por correo electrónico.
          </Text>
        </View>

        
        <View style={{
          width:"70%",
          height:50,
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"center"
        }}>
          <Checkbox
            status={this.state.checked2 ? 'checked' : 'unchecked'}
            onPress={() => { this.setState({ checked2: !this.state.checked2 }); }}
          />
          <Text style={{fontFamily:"NunitoRegular", fontSize:10, flexWrap:"wrap"}}>
            Estoy de acuerdo con los Términos y Condiciones y la política de privacidad de GELATIN APP.
          </Text>
        </View>

        <Button  
          mode="contained" 
          contentStyle={{
            height: 40,
            width: 150
          }} 
          style={{
            borderRadius:20,
            marginTop: 10,
            elevation:7
          }}
          color={this.props.state.colores.azulClaro}
          onPress={() => this.props.navigation.navigate('Login')}
        >
            <Text style={{fontFamily: "NunitoBold", fontSize:14, color:"white"}}>Register</Text>
        </Button>    
        <FooterIniciarSesion navigator={this.props.navigation}/>    
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    corriendo: {
      height: '40%', 
      width: '60%'
    },
    logo: {
      width: 100, 
      height: 100,
      paddingBottom: 30
    },
    boton: {
      backgroundColor: "#70a5f9",
      borderRadius:40,
      width: "50%"
    },
    textos: {
      padding: 15
    },
    inputs: {        
      width: 125,
      height: 50,
      backgroundColor: 'grey'
    }

  });

export default connect(mapStateToProps)(Register)