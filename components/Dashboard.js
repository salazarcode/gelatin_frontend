import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux'
import axios from 'axios'

function mapStateToProps(state){
  return {
    state: state
  }
}

class DashboardScreen extends React.Component 
{    
  static navigationOptions = {
      header: null
  }
  constructor(props) {
    super(props);
    this.state = {
      token: this.props.navigation.getParam("token", ""),
      isLoading: false
    };
  }  
  async logout(){
    await this.setState({
      isLoading: true
    });
    await axios({
      method: 'post',
      url: 'https://ivorystack.com/mainbk/public/api/logout',
      headers: {"token": this.state.token}
    })
    .then(function (response) {
      this.setState({
        token:"",
        isLoading: false
      });
      this.props.navigation.navigate('Opciones');
    });    
  }  

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>    
        <Text>Dashboard</Text> 
        <Text>{this.state.token}</Text>
        <Button 
          title="Salir" 
          onPress={(ev)=>{this.logout()}}
          style={styles.boton}
          loading={this.state.isLoading}
        >
          Salir
        </Button>
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
export default connect(mapStateToProps)(DashboardScreen)