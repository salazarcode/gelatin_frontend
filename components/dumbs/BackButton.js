import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Platform } from 'react-native';

class BackButton extends React.Component 
{    
  render() {
    return (
      <TouchableOpacity style={{
            top: Platform.OS === 'android' ? 29 : 0,
            position: "absolute",
            left: 5,
            elevation:7      
      }} onPress={()=>this.props.goBack.goBack()}>
        <Image
          source={require("../../assets/atras.png")}
          style={{
            height:50,
            width:50
          }}
        />
      </TouchableOpacity>
    );
  } 
}
export default BackButton