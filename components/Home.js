import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux'

function mapStateToProps(state){
  return {
    state: state
  }
}

class HomeScreen extends React.Component 
{
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>{this.props.state.mensaje}</Text>
        <Button 
          title="btn_details" 
          onPress={() => this.props.navigation.navigate('Details')} 
          color="green"
        >
          Details
        </Button>
      </View>
    );
  }
}

export default connect(mapStateToProps)(HomeScreen)