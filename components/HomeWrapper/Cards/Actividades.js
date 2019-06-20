import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView, Image} from 'react-native';
import { Surface, IconButton, Divider } from 'react-native-paper';
import { connect } from 'react-redux'

import Card from '../../dumbs/MyCard'

class Actividades extends React.Component 
{    
  render() {
    return (
      <Card width="90%" padding={20}>
        <Text style={{
          marginLeft:20, 
          marginBottom:20, fontFamily:"NunitoBold",}}>Actividades</Text>           
      </Card>
    );
  }
}

const styles = StyleSheet.create({
});
export default connect(null)(Actividades)