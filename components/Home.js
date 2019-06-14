import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Home Screen</Text>
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