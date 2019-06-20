import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView} from 'react-native';
import { Surface, IconButton, Divider } from 'react-native-paper';
import { connect } from 'react-redux'
import moment from 'moment-with-locales-es6'

class Fecha extends React.Component 

{    
  render() {
    const theColor = "#3fc8ea";
    let date = moment().locale("es").format("LLLL");


    return (
        <View styles={styles.viewWrapper}>
            <Surface style={styles.surface} >
              <Text style={styles.surfaceText}>{date}</Text>
            </Surface>   
          </View>
    );
  }
}

const theElevation = 4;
const theSize = 200;
const styles = StyleSheet.create({
  surface: {
    marginTop: 10, 
    marginLeft: 20, 
    marginRight: 20, 
    marginBottom: 10,
    width: "90%", 
    elevation:theElevation, 
    borderRadius:20, 
    height: 40, 
    backgroundColor: 'white', 
    justifyContent: "center", 
    alignItems: "center", 
    alignSelf: "center"
  },
  surfaceText: {
    color:"black", 
    fontWeight:"500", 
    fontSize: 12  
  },
  viewWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
  }
});
export default connect(null)(Fecha)