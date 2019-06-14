import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'react-native-paper'
import { connect } from 'react-redux'
import axios from 'axios'

function mapStateToProps(state){
  return {
    state: state
  }
}

class LoginScreen extends React.Component 
{    
  static navigationOptions = {
      header: null
  }
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }  
  componentDidMount(){
    /*let todos = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) {
      return response.data;
    })
    .catch(function(error){
      console.log(error)
    })

    this.setState({todos: todos});
    console.log(this.state);*/
  }
  render() {

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>    
        <Button 
          title="Entrar" 
          onPress={() => this.props.navigation.navigate('Details')} 
          color="green"
        >
          LOGIN
        </Button>
      </View>
    );
  }
}

export default connect(mapStateToProps)(LoginScreen)