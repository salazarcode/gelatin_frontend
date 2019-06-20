import React from 'react';
import {IconButton} from 'react-native-paper';

export default class CkeckAlarm extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
          isPressed: false
        };
    }   
    render() {
        const icon = this.state.isPressed == true ? "check-box" : "check-box-outline-blank";
        return(
          <IconButton
            icon={icon}
            color="white"
            size={20}              
            onPress={()=>{
              this.setState({isPressed: !this.state.isPressed})
            }}
          />               
        )

    }
}