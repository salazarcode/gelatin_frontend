import React from 'react';
import { StyleSheet, View } from 'react-native';

class MyCard extends React.Component 
{    
  render() {
    return (
        <View style={{
          width:this.props.width, 
          height: this.props.height,
          elevation: 7,

          alignSelf: "center",
          borderRadius: this.props.borderRadius != undefined ? this.props.borderRadius : 20,
          marginTop: this.props.marginTop != undefined ? this.props.marginTop : 10,
          marginBottom: this.props.marginBottom != undefined ? this.props.marginBottom : 10,
          paddingTop: this.props.paddingTop != undefined ? this.props.paddingTop : 5,
          paddingBottom: this.props.paddingBottom != undefined ? this.props.paddingBottom : 5,
          paddingRight: this.props.paddingRight != undefined ? this.props.paddingRight : 5,
          paddingLeft: this.props.paddingLeft != undefined ? this.props.paddingLeft : 20,
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