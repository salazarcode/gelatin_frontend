import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView} from 'react-native';
import { Surface, IconButton, Divider } from 'react-native-paper';
import { connect } from 'react-redux'

class Agua extends React.Component 
{    
  render() {
    const theColor = "#3fc8ea";
    const theElevation = 4;
    const theSize = 200;
    return (
      <View styles={{
        flex: 1,
        flexDirection: 'row',
        alignItems: "center"          
      }}>
        <Surface style={{marginTop: 10, marginLeft: 20, marginRight: 20, marginBottom: 10,width: "90%", elevation:theElevation, borderRadius:20, height: theSize, backgroundColor: 'white', padding: 20, alignSelf: "center"}} >
          <Text style={{color:theColor, fontWeight:"400", fontSize: 16}}>Agua</Text>
        </Surface>   
      </View>
    );
  }
}
export default connect(null)(Agua)