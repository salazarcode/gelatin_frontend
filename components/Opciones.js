import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
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
      todos: []
    };
  }  
  render() {

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
      <Text>Opciones</Text>  
        <Button 
          title="btn_details" 
          onPress={() => this.props.navigation.navigate('Details')} 
          color="green"
        >
          Ir a detalles
        </Button>
      </View>
    );
  }
}

export default connect(mapStateToProps)(OpcionesScreen)