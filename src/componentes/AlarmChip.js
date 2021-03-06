import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class AlarmChip extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
          isPressed: false
        };
    }   
    render() {
        const backG = this.state.isPressed == true ? "#3FC1C9" : "transparent";
        const borderColor = this.state.isPressed == true ? "#3FC1C9" : "white";
        return(
          <TouchableOpacity onPress={()=>{
            this.setState({isPressed: !this.state.isPressed})
          }}>
            <Text style={{
              color:"white", 
              fontSize:12, 
              borderStyle:"solid",
              borderWidth:1,
              borderColor:borderColor,
              padding:3,
              margin:this.props.margin == undefined ? 5 : this.props.margin,
              borderRadius:this.props.radius == undefined ? 15 : this.props.radius,
              textAlign:"center",
              backgroundColor: backG,
              fontFamily:"NunitoRegular",
            }}>
              {this.props.children}
            </Text>             
          </TouchableOpacity>
          
        )

    }
}