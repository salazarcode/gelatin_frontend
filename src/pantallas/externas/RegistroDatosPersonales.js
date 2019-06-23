import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView, Platform } from 'react-native';
import {Button, IconButton} from 'react-native-paper'
import { connect } from 'react-redux'
import axios from 'axios'

function mapStateToProps(state){
  return {
    state: state
  }
}

class RegisterDatosPersonales extends React.Component 
{    
    static navigationOptions = {
        header: null
    }
    constructor(props) {
      super(props);
      this.state = {
      };
    }  
    render() {  
      return (
        <SafeAreaView style={{
          flex: 1, 
          backgroundColor: this.props.state.colores.fondo, 
          alignItems:"center", 
          justifyContent:"center",
          paddingTop: Platform.OS === 'android' ? 24 : 0
        }}>
            <Image
              style={{
                backgroundColor:"transparent",
                width:300,
                height:"50%",
                position:"absolute",
                right:0,
                top: Platform.OS === 'android' ? 24 : 0
              }}
              source={require('../../assets/img/imagen-referencial.png')}
            />
            <View style={{alignItems:"center", justifyContent:"center", marginTop: "90%"}}>
              <Text style={styles.titulo}>Hoy es la mejor</Text>
              <Text style={styles.titulo}>oportunidad.</Text>   
              <Text style={styles.parrafo}>Ahora es el mejor momento</Text>   
            </View>

            <Button  
              mode="contained" 
              icon={require('../../assets/img/registrate.png')}
              contentStyle={{
                height: 50,
                width: 200
              }} 
              style={{
                borderRadius:25,
                elevation:7,
              }}
              color={this.props.state.colores.azulClaro}
              onPress={() => this.props.navigation.navigate('Register')}
            >
                <Text style={{fontFamily: "NunitoRegular", fontSize:14, color:"white"}}>REGÍSTRATE</Text>
            </Button>

            <Button  
              mode="contained" 
              icon={require('../../assets/img/iniciar-sesion.png')}
              contentStyle={{
                height: 50,
                width: 200
              }} 
              style={{
                borderRadius:25,
                marginTop:10,
                elevation:7
              }}
              color={this.props.state.colores.azulClaro}
              onPress={() => this.props.navigation.navigate('Login')}
            >
                <Text style={{fontFamily: "NunitoRegular", fontSize:14, color:"white"}}>INICIAR SESIÓN</Text>
            </Button>
        </SafeAreaView>
      );
    }
  }

  const styles = StyleSheet.create({
    titulo: {
      fontFamily: "NunitoBold",
      fontSize: 30,
      color:"rgba(0,0,0,0.6)"
    },    
    parrafo: {
      fontFamily: "NunitoRegular",
      fontSize: 18,
      color:"rgba(0,0,0,0.6)",
      marginTop:10,
      marginBottom: -5
    }
  });

export default connect(mapStateToProps)(RegisterDatosPersonales)