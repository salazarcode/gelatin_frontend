import React from 'react';
import { StyleSheet, View } from 'react-native';

class MyCard extends React.Component 
{    
  render() {
    return (
        <View style={{
          width:this.props.width, 
          height: this.props.height,
          backgroundColor:"#fff7fe",

          shadowOffset:{  width: 4,  height: 4,  },
          shadowColor: 'silver',
          shadowOpacity: 0.1,

          alignSelf: "center",
          borderRadius: this.props.borderRadius != undefined ? this.props.borderRadius : 20,
          marginTop: 10,
          marginBottom:10,
          padding: this.props.padding,
          alignItems: this.props.alignItems,
          justifyContent: this.props.justifyContent,
          backgroundColor: this.props.backgroundColor != undefined ? this.props.backgroundColor : "white"
        }}>
          {this.props.children}
        </View>
    );
  } 
}
export default MyCard