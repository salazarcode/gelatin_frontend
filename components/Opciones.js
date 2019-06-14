import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import {Button} from 'react-native-paper'
import { connect } from 'react-redux'
import axios from 'axios'

function mapStateToProps(state){
  return {
    state: state
  }
}

class OpcionesScreen extends React.Component 
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
        <ScrollView contentContainerStyle={styles.container}>
          <Image
            style={styles.corriendo}
            source={require('../assets/corriendo.jpg')}
          />
          <View style={styles.textos}>
            <Text style={{textAlign:'center', fontSize: 23}}>Hoy es la mejor</Text>
            <Text style={{textAlign:'center', fontSize: 23}}>oportunidad.</Text>   
            <Text style={{textAlign:'center', fontSize: 12}}>Ahora es el mejor momento</Text>   
          </View>
  
            <Button icon="airplanemode-active" mode="contained" style={styles.boton} onPress={() => this.props.navigation.navigate('Registro')}>
                REGISTRATE
            </Button>
            <View style={{padding: 10}} />
            
            <Button icon="home" mode="contained" style={styles.boton} onPress={() => this.props.navigation.navigate('Login')}>
                INICIAR SESIÓN
            </Button>
        </ScrollView>
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
    }

  });

export default connect(mapStateToProps)(OpcionesScreen)