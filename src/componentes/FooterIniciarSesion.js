import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Platform, Text } from 'react-native';
import {connect} from 'react-redux'


function mapStateToProps(state){
  return {
    state: state
  }
}

class FooterIniciarSesion extends React.Component 
{    
  render() {
    return (
      <View style={{
        height:300,
        bottom:0,
        width:"100%",
        elevation:9
      }}>
        <Image
        style={{
          height:100,
          width:"100%",
          backgroundColor:"transparent"
        }}
        source={require('../assets/img/curva-login.png')} />
        <TouchableOpacity
          style={{
            position:"absolute",
            height:"100%",
            width:"100%",
            alignItems:"center",
            justifyContent:"center"
          }} 
          onPress={()=>{this.props.navigator.navigate("Login")}}>
          <Text style={{fontFamily:"NunitoRegular"}}>¿Ya tienes una cuenta?</Text>
          <Text style={{fontFamily:"NunitoRegular", fontSize:15, color:this.props.state.colores.rosa}}>INICIAR SESIÓN</Text>
        </TouchableOpacity>
      </View>
    );
  } 
}
export default connect(mapStateToProps)(FooterIniciarSesion)