import React from 'react';
import { StyleSheet, View } from 'react-native';

class MyCard extends React.Component 
{    
  render() {
    return (
        <View style={{
          width:"90%", 
          backgroundColor:"#fff7fe",

          shadowOffset:{  width: 3,  height: 3,  },
          shadowColor: 'black',
          shadowOpacity: 0.1,

          alignSelf: "center",
          borderRadius: 20,
          marginTop: 10,
          marginBottom:10
        }}>
          {this.props.children}
        </View>
    );
  } 
}
export default MyCard