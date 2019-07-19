import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper'
import { connect } from 'react-redux'
import axios from 'axios'
import Actions from "../../store/Actions";

function mapStateToProps(state){
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch)
{
  return {
    setInitials: (variable, valor) => dispatch(Actions.setInitials(variable, valor)),
  };
}

class PresentacionScreen extends React.Component 
{    
  constructor(props){
    super(props)
  }
  static navigationOptions = {
      header: null
  }
  render() {

    return (
      <View style={{flex:1, alignItems:"center", justifyContent:"center", backgroundColor:this.props.state.colores.fondo}}> 
        <Image
          style={{width: 50, height:50, marginTop:20, marginBottom:20}}
          source={require('../../assets/img/logo.png')}
        />
        <Image
          style={{width: "75%", height:300,borderRadius:50}}
          source={require('../../assets/img/foto-inicio.png')}
        />
        <View style={{width:"100%", marginTop:20, marginBottom:10, height:"auto", alignItems:"center", justifyContent:"center"}}>
          <Text style={{fontFamily:"NunitoRegular", fontSize:14}}>Adopta un estilo de vida</Text>
          <Text style={{fontFamily:"NunitoRegular", fontSize:14}}>Más saludable</Text>     
        </View>

        <Button  
          mode="contained" 
          contentStyle={{
            height: 50,
            width: 150
          }} 
          style={{
            borderRadius:25,
            marginTop: 10,
            elevation:7
          }}
          color={this.props.state.colores.azulClaro}
          onPress={() => this.props.navigation.navigate('Opciones')}
        >
            <Text style={{fontFamily: "NunitoBold", fontSize:14, color:"white"}}>¡EMPECEMOS!</Text>
        </Button>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PresentacionScreen)