import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { button } from 'react-native-paper'
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
      <View style={{ flex: 1 }}>    
        <Button 
          title="Botón de empecemos" 
          onPress={() => this.props.navigation.navigate('')} 
          color="green"
        >
          Ir a detalles
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1
    }
  });

export default connect(mapStateToProps)(HomeScreen)