import React from 'react';
import { StyleSheet, View, Picker } from 'react-native';
import {Button, Text, Switch} from 'react-native-paper'
import { connect } from 'react-redux'

function mapStateToProps(state){
  return {
    state: state
  }
}

class Paso4 extends React.Component 
{    
  state = {
    intensidad_programa:undefined,
    actividad_fisica_actual:undefined,
    actividad_fisica_meta:undefined
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
      type: "PASO4",
      payload: this.state
    });
    this.props.navigation.navigate("Paso5");   
  }
   

  render() {
    const {
      intensidad_programa,
      actividad_fisica_actual,
      actividad_fisica_meta,
    } = this.state
    return (
    <View style={styles.slide}>          
          <Text>Intensidad del programa</Text>
          <Text>Pequeño texto aleatorio</Text>

          <Picker
            selectedValue={this.state.intensidad_programa}
            style={{height: 50, width: 100, marginTop: 20}}
            onValueChange={(value) => this.setState({intensidad_programa: value}) }>
            <Picker.Item label="Bajo" value="1" />
            <Picker.Item label="Moderado" value="2" />
            <Picker.Item label="Intenso" value="3" />
            <Picker.Item label="Muy Intenso" value="4" />
          </Picker>    

          <Text>Estado de actividad física actual</Text>
          <Picker
            selectedValue={this.state.actividad_fisica_actual}
            style={{height: 50, width: 100, marginTop: 20}}
            onValueChange={(value) => this.setState({actividad_fisica_actual: value}) }>
            <Picker.Item label="Bajo" value="1" />
            <Picker.Item label="Moderado" value="2" />
            <Picker.Item label="Intenso" value="3" />
            <Picker.Item label="Muy Intenso" value="4" />
          </Picker> 

          <Text>Estado de actividad física meta</Text>
          <Picker
            selectedValue={this.state.actividad_fisica_meta}
            style={{height: 50, width: 100, marginTop: 20}}
            onValueChange={(value) => this.setState({actividad_fisica_meta: value}) }>
            <Picker.Item label="Bajo" value="1" />
            <Picker.Item label="Moderado" value="2" />
            <Picker.Item label="Intenso" value="3" />
            <Picker.Item label="Muy Intenso" value="4" />
          </Picker> 

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

export default connect(mapStateToProps)(Paso4)