import React from 'react';
import { StyleSheet, View, Picker } from 'react-native';
import {Button, Text, Switch, TextInput} from 'react-native-paper'
import { connect } from 'react-redux'
import axios from 'axios'

function mapStateToProps(state){
  return {
    state: state
  }
}

class Paso4 extends React.Component 
{    
  state = {
    profile_picture:1,
    email: undefined,
    password: undefined
  }
  static navigationOptions = {
      header: null
  }
  constructor(props) {
    super(props);
    this.onRegister = this.onRegister.bind(this);
  }  

  async onRegister(){        
    let ruta = "https://ivorystack.com/mainbk/public/api/";
    let res = await axios.post(ruta + 'register', this.props.state)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
    });

    await this.props.dispatch({
      type: "SET_TOKEN",
      payload: {token:res}
    });
    
    this.props.navigation.navigate("HomeWrapper")
  }


  render() {
    const {
      correo,
      password
    } = this.state
    return (
      <View style={styles.slide}>          
        <Text>Crear una cuenta</Text>
        <View  style={{flexDirection: 'row'}}>
          <Text>Correo: </Text>
          <TextInput
            label='Correo'
            style={{width:"60%"}}
            value={this.state.email}
            onChangeText={text => this.setState({ email : text })}
          />
        </View>

        <View  style={{flexDirection: 'row'}}>
          <Text>Password: </Text>
          <TextInput
            label='Password'
            style={{width:"60%"}}
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={text => this.setState({ password : text })}
          />
        </View>                    
        <Button
          mode="contained" 
          onPress={async (e) => {
            await this.props.dispatch({
              type: "PASO5",
              payload: this.state
            });
            this.onRegister();
          }}
        >Regístrate</Button>
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