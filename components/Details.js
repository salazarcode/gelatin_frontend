import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class DetailsScreen extends React.Component {

    static navigationOptions = {
      header: null
    }  
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Details Screen</Text>
          <Button 
            title="btn_home" 
            onPress={() => this.props.navigation.navigate('Home')} 
            color="green"
          >
              Home
            </Button>
          
        </View>
      );
    }
  }