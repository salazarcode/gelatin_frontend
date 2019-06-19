import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView, Image} from 'react-native';
import { Surface, IconButton, Divider } from 'react-native-paper';
import { connect } from 'react-redux'

/*
        <View styles={styles.WrapperView}>
          <Surface style={styles.WrapperSurface} >
            <View styles={{flex:1}}>
              <Image source={hamburguesaImg} />
            </View>
          </Surface>   
        </View>


*/

class DatosCardiovasculares extends React.Component 
{    
  render() {
    return (
        <Card>
          <Text style={{marginLeft:20, marginBottom:20}}>Datos Cardiovasculares</Text>           
        </Card>
    );
  }
}


const theColor = "#3fc8ea";
const theElevation = 4;
const theSize = 200;

const styles = StyleSheet.create({

});
export default connect(null)(DatosCardiovasculares)