import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { IconButton } from 'react-native-paper';

class CardFooter extends React.Component 
{    
  render() {
    return (
        <View style={{flex:1, flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
        <TouchableOpacity style={{flex:1, flexDirection:"row", alignItems:"center", justifyContent:"space-between"}} onPress={this.props.onLeftPressed}>
          <View style={{flex:1, flexDirection:"row"}}>
            <View 
              style={{
                backgroundColor:"#3FC1C9", 
                height:20, 
                width:20, 
                borderRadius:10, 
                marginRight:5, 
                alignItems: "center", 
                justifyContent:"center"
              }}
              onPress={() => console.log('View Pressed')}
            >
              <Text style={{ color:"white",  fontSize:15,  fontFamily:"NunitoBold",}}>+</Text>
            </View>   
            <Text style={{ color:"#3FC1C9", fontSize:12,  fontFamily:"NunitoRegular", }}>
              {this.props.texto}
            </Text>            
          </View>
        </TouchableOpacity> 

        <View style={{
          alignSelf:"flex-end"
        }}>
          <IconButton
            icon="chevron-right"
            color="#3FC1C9"
            size={20}              
            onPress={this.props.onRightPressed}
          />  
        </View>
      </View>
    );
  } 
}
export default CardFooter