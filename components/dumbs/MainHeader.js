import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { IconButton } from 'react-native-paper';
import IconMenu from '../../assets/pngs/menu.png'

class MainHeader extends React.Component 
{    
  render() {
    return (
        <View style={{
          height:50,
          width:"100%",
          flexDirection:"row",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex:80,
          position:"absolute"
        }}>
          <IconButton source={IconMenu} style={{height:"100%", width:50}}/>
          <Text style={{ fontFamily:"NunitoBold",}}>HAZTE PREMIUM</Text>
        </View>
    );
  } 
}
export default MainHeader