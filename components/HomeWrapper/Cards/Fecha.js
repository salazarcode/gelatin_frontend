import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView} from 'react-native';
import { Surface, IconButton, Divider } from 'react-native-paper';
import { connect } from 'react-redux'
import moment from 'moment-with-locales-es6'

import Card from '../../dumbs/MyCard'

class Fecha extends React.Component 

{    
  render() {
    const theColor = "#3fc8ea";
    let date = "Hoy, " + moment().locale("es").format("LL");

    return ( 
      <View style={{
        width:"90%", 
        height: 40,
        backgroundColor:"white",
        elevation: 7,

        borderRadius: 25,
        marginTop: 5,
        marginBottom:5,
        paddingRight: 3,

        flexDirection:"row",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <IconButton
          icon="chevron-left"
          color="black"
          size={20}
          onPress={() => console.log('Left Pressed')}
        />

        <Text style={{ fontFamily:"NunitoRegular",}}>{date}</Text>   

        <IconButton
          icon="chevron-right"
          color="black"
          size={20}
          onPress={() => console.log('Left Pressed')}
        />  
      </View>
    );
  }
}
export default connect(null)(Fecha)