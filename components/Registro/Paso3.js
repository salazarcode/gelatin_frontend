import React from 'react';
import { StyleSheet, View, Picker } from 'react-native';
import {Button, Text, Switch, TextInput} from 'react-native-paper'
import { connect } from 'react-redux'

function mapStateToProps(state){
  return {
    state: state
  }
}

class Paso3 extends React.Component 
{    
  state = {
    peso : undefined,
    cintura: undefined,
    peso_ideal: undefined    
  }
  static navigationOptions = {
      header: null
  }
  constructor(props) {
    super(props);
    this.onNext = this.onNext.bind(this)
  }  

  onNext(){
    this.props.dispatch({
      type: "PASO3",
      payload: this.state
    });
    this.props.navigation.navigate("Paso4");   
  }
  

  render() {
    const {
      peso,
      cintura,
      peso_ideal 
    } = this.state
    return (
    <View style={styles.slide}>          
          <Text>¿Cual es tu peso actual?</Text>
          <View  style={{flexDirection: 'row'}}>
            <Text>Peso actual: </Text>
            <TextInput
              label='Peso Actual'
              keyboardType = 'numeric'
              style={{width:"60%"}}
              value={this.state.peso}
              onChangeText={text => this.setState({ peso : text })}
            />
          </View>
          <View  style={{flexDirection: 'row'}}>
            <Text>Circunferencia de la cintura: </Text>
            <TextInput
              label='Circunferencia de la cintura'
              keyboardType = 'numeric'
              style={{width:"60%"}}
              value={this.state.cintura}
              onChangeText={text => this.setState({ cintura : text })}
            />
            <Text>{this.state.cintura}</Text>
          </View>
          <View  style={{flexDirection: 'row'}}>
            <Text>Peso ideal: </Text>
            <TextInput
              label='Peso Ideal'
              keyboardType = 'numeric'
              style={{width:"60%"}}
              value={this.state.peso_ideal}
              onChangeText={text => this.setState({ peso_ideal : text })}
            />
          </View>

          <Button          
          mode="contained"   
          onPress={this.onNext} />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default connect(mapStateToProps)(Paso3)