import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Platform } from 'react-native';

class BackButton extends React.Component 
{    
  render() {
    return (
      <TouchableOpacity 
        style={{
          top:5,
          left: 5,
          position: "absolute",
          elevation:7,
          zIndex:99
        }} 
        onPress={()=>console.log(this.props.nav.goBack())}
      >
        <Image
          source={require("../assets/img/atras.png")}
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