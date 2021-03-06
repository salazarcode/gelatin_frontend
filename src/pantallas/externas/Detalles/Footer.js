import React from 'react';
import { 
  StyleSheet, View, TouchableOpacity, Image, Platform, Text 

} from 'react-native';
import { connect } from 'react-redux'

function mapStateToProps(state){
  return {
    state: state
  }
}

class Footer extends React.Component 
{   
  render() {
    /*  
    */ 
    return (
      <View style={{height:100, width:"100%", justifyContent: 'flex-end', backgroundColor:"transparent"}}>
        <Image
        style={{
          position:"absolute",
          width:"100%",    
          height:"100%",
          resizeMode:"stretch",
          backgroundColor:"transparent"
        }}
        source={require('../../../assets/img/curva-login.png')} />        
        <TouchableOpacity
          style={{
            position:"absolute",
            height:"100%",
            width:"100%",
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"transparent"
          }} 
          onPress={()=>{console.log("goLogin")}}>
          <Text style={{fontFamily:"NunitoRegular"}}>¿Ya tienes una cuenta?</Text>
          <Text style={{fontFamily:"NunitoRegular", fontSize:15, color:this.props.state.colores.rosa}}>INICIAR SESIÓN</Text>
        </TouchableOpacity>
      </View> 

    );
  }
}

export default connect(mapStateToProps)(Footer)