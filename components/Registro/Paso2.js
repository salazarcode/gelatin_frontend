import React from 'react';
import { StyleSheet, View, Picker } from 'react-native';
import {Button, Text, Switch, TextInput, RadioButton} from 'react-native-paper'
import { connect } from 'react-redux'

function mapStateToProps(state){
  return {
    state: state
  }
}

class Paso2 extends React.Component 
{    
  state = {
    sexo: "",
    nombre: "",
    ubicacion: "",
    edad: undefined,
    estatura: undefined    
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
      type: "PASO2",
      payload: this.state
    });
    this.props.navigation.navigate("Paso3");   
  }

  render() {
    const {
      sexo,
      nombre,
      ubicacion,
      edad,
      estatura,
    } = this.state
    return (
    <View style={styles.slide}>          
      <Text>Datos</Text>

      <RadioButton.Group
        onValueChange={value => this.setState({ sexo : value })}
        value={this.state.sexo}
      >
        <View>
          <Text>Hombre</Text>
          <RadioButton value="hombre" />
        </View>
        <View>
          <Text>Mujer</Text>
          <RadioButton value="mujer" />
        </View>
      </RadioButton.Group>           

      <View  style={{flexDirection: 'row'}}>
        <Text>Nombre: </Text>
        <TextInput
          label='Nombre'
          style={{width:"60%"}}
          value={this.state.nombre}
          onChangeText={text => this.setState({ nombre : text })}
        />
      </View>

      <View  style={{flexDirection: 'row'}}>
        <Text>Ubicación: </Text>
        <TextInput
          label='Ubicacion'
          style={{width:"60%"}}
          value={this.state.ubicacion}
          onChangeText={text => this.setState({ ubicacion : text })}
        />
      </View>

      <View  style={{flexDirection: 'row'}}>
        <Text>Estatura: </Text>
        <TextInput
          label='Estatura'              
          keyboardType = 'numeric'
          style={{width:"60%"}}
          value={this.state.estatura}
          onChangeText={text => this.setState({ estatura : text })}
        />
      </View>

      <View  style={{flexDirection: 'row'}}>
        <Text>Edad: </Text>
        <TextInput
          label='Edad'
          keyboardType = 'numeric'
          style={{width:"60%"}}
          value={this.state.edad}
          onChangeText={text => this.setState({ edad : text })}
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

export default connect(mapStateToProps)(Paso2)