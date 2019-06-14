import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux'
import axios from 'axios'

function mapStateToProps(state){
  return {
    state: state
  }
}

class HomeScreen extends React.Component 
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
  async componentDidMount(){
    let todos = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) {
      return response.data;
    })
    .catch(function(error){
      console.log(error)
    })

    this.setState({todos: todos});
    console.log(this.state);
  }
  render() {

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>    
        <Button 
          title="btn_details" 
          onPress={() => this.props.navigation.navigate('Details')} 
          color="green"
        >
          Ir a detalles
        </Button>
      </View>
    );
  }
}

export default connect(mapStateToProps)(HomeScreen)