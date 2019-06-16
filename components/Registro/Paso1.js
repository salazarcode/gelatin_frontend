import React from 'react';
import { StyleSheet, View, Picker } from 'react-native';
import {Button, Text, Switch} from 'react-native-paper'
import { connect } from 'react-redux'

function mapStateToProps(state){
  return {
    state: state
  }
}

class Paso1 extends React.Component 
{    
  state = {
    pool_id:1,
    role_id:3, //premium por ahora
    bajarDePeso: false,
    correrMaraton: false,
    normalizarDiabetes: false,
    
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
      type: "PASO1",
      payload: this.state
    });
    this.props.navigation.navigate("Paso2");   
  }

  render() {
    const {
      bajarDePeso,
      correrMaraton,
      normalizarDiabetes,
    } = this.state;
    return (
        <View style={styles.slide}>                    
          <Text>¿Cuál es tu objetivo?</Text>
          <View  style={{flexDirection: 'row'}}>
            <Text>Bajar de Peso</Text>
            <Switch
              value={this.state.bajarDePeso}
              onValueChange={() =>
                { this.setState({ bajarDePeso : !bajarDePeso }); }
              }
            />            
          </View>

          <View  style={{flexDirection: 'row'}}>
            <Text>Correr una maratón</Text>
            <Switch
              value={this.state.correrMaraton}
              onValueChange={() =>
                { this.setState({ correrMaraton : !correrMaraton }); }
              }
            />            
          </View>

          <View  style={{flexDirection: 'row'}}>
            <Text>Normalizar la diábetes</Text>
            <Switch
              value={this.state.normalizarDiabetes}
              onValueChange={() =>
                { this.setState({ normalizarDiabetes : !normalizarDiabetes }); }
              }
            />            
          </View>

          <Button          
            mode="contained"   
            onPress={this.onNext}
          >Siguiente</Button>
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

export default connect(mapStateToProps)(Paso1)