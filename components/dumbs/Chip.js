import React from 'react';
import {Text, View} from 'react-native';

export default class Chip extends React.Component { 
    constructor(props){
        super(props)
    }   
    render() {
        return(
          <View style={{
            height:40, 
            width:"auto", 
            backgroundColor:"#364F6B", 
            marginLeft:5, 
            marginRight:5,
            borderRadius:5,
            padding:5,
            alignItems:"flex-start",
            justifyContent:"center"
          }}>
            <Text style={{color:"white", fontSize:12,  fontFamily:"NunitoBold",}}>{this.props.line1}</Text>
            <Text style={{color:"white", fontSize:12,  fontFamily:"NunitoBold",}}>{this.props.line2}</Text>
          </View>             
        )

    }
}