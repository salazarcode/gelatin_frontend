import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {Button} from 'react-native-paper'
import { connect } from 'react-redux'
import axios from 'axios'

function mapStateToProps(state){
  return {
    state: state
  }
}

async function login(correo, password, state){
    this.setState({"isLoading": true});
    let res = await axios.post('https://ivorystack.com/mainbk/public/api/login', {
        email: correo,
        password: password
    })
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
    state.setState({"isLoading": false});
    console.log(res);
}



class LoginScreen extends React.Component 
{        
  static navigationOptions = {
      header: null
  }
  constructor(props) {
    super(props);
    this.state = {
      correo: "",
      password: "",
      isLoading: false,
      token: ""
    };
    this.login = this.login.bind(this)
  }  
  async login(){
      let correo = this.state.correo;
      let password = this.state.password;
    await this.setState({"isLoading": true});
    let res = await axios.post("https://ivorystack.com/mainbk/public/api/" + 'login', {
        email: correo,
        password: password
    })
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });    
    await this.setState({"isLoading": false});
    if(res.success == 1)
    {        
        await this.setState({
            "isLoading": false
        });
        await this.props.dispatch({
          type: "SET_TOKEN",
          payload: {token:res.token}
        });
        this.props.navigation.navigate('HomeWrapper')
    }
    else
    {   
        await this.setState({
            "isLoading": false,
            "token": res.message
        });
    }
    
    }

  render() {

    return (
      <View style={styles.container}>  
        <TextInput
          style={{height: 40}}
          placeholder="Correo"
          style={styles.input}
          onChangeText={(correo) => this.setState({"correo": correo})}
        />       
        <TextInput
          style={{height: 40}}
          secureTextEntry={true}
          placeholder="Password"
          style={styles.input}
          onChangeText={(password) => this.setState({"password":password})}
        />        
        <Button 
          title="Entrar" 
          onPress={(ev)=>{this.login()}}
          style={styles.boton}
          loading={this.state.isLoading}
        >
          LOGIN
        </Button>
        <Text>{this.state.token}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    corriendo: {
      height: '40%', 
      width: '60%'
    },
    logo: {
      width: 100, 
      height: 100,
      paddingBottom: 30
    },
    boton: {
      backgroundColor: "#70a5f9",
      borderRadius:40,
      width: "50%"
    },
    textos: {
      padding: 15
    },
    inputs: {        
      width: 125,
      height: 50,
      backgroundColor: 'grey'
    }

  });

export default connect(null)(LoginScreen)