import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView} from 'react-native';
import { Surface, IconButton, Divider } from 'react-native-paper';
import { connect } from 'react-redux'

class Chip extends React.Component { 
    constructor(props){
        super(props)
    }
   
    render() {
        const {fontColor, bgColor, texto} = this.props;
        return (
            <View style={{
                backgroundColor: bgColor, 
                width: 60, 
                height: 20, 
                justifyContent: 'center',
                alignItems: 'center'         
            }}>
                <Text style={{color:fontColor}}>{texto}</Text>
            </View>
        );
    }
}

export default connect(null)(Chip)