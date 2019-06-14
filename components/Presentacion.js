import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-paper'
import { connect } from 'react-redux'
import axios from 'axios'

function mapStateToProps(state){
  return {
    state: state
  }
}

class PresentacionScreen extends React.Component 
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
          style={styles.logo}
          source={require('../assets/logo-react.jpg')}
        />
        <Image
          style={styles.hombre}
          source={require('../assets/hombre.jpg')}
        />
        <View style={styles.textos}>
          <Text style={{textAlign:'center'}}>Adopta un estilo de vida</Text>
          <Text style={{textAlign:'center'}}>Más saludable</Text>   
        </View>

        <Button icon="" mode="contained" style={styles.boton} onPress={() => this.props.navigation.navigate('Opciones')}>
            ¡Empecemos!
        </Button>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',      
      backgroundColor: "#f9f9ea"
    },
    hombre: {
      width: '70%', 
      height: '40%', 
      borderRadius:50
    },
    logo: {
      width: 100, 
      height: 100,
      paddingBottom: 30//, 
      //borderRadius:100
    },
    boton: {
      backgroundColor: "#70a5f9",
      borderRadius:40
    },
    textos: {
      padding: 15
    }

  });

export default connect(mapStateToProps)(PresentacionScreen)