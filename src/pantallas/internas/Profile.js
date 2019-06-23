import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { connect } from 'react-redux'
import axios from 'axios'

function mapStateToProps(state){
  return {
    state: state
  }
}

class Profile extends React.Component 
{     
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this)    
    this.state = {
      //isLoading: false
    };
  } 

  
  async logout(token){
    let ruta = "https://ivorystack.com/mainbk/public/api/"

    let conf = {
      method: 'post',
      url: ruta + 'logout',
      headers: {"token": token}
    };
    let res = await axios(conf)
    .then((response)=> {
      return response.data
    })
    .catch(()=>{}); 
    
    this.props.dispatch({
      type: "SALIR",
      payload: {
        estaFuera: true
      }
    });

    console.log(this.props)



  }  
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>    
        <Text>Profile {this.props.state.token}</Text>
        <Button 
          title="Salir" 
          onPress={(ev)=>{this.logout(this.props.state.token)}}
          style={styles.boton}
          loading={this.state.isLoading}
        >
          Salir
        </Button>
        <Button 
          title="aux" 
          onPress={(ev)=>{console.log(this)}}
          style={styles.boton}
          loading={this.state.isLoading}
        >
          Auxiliar
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
  boton: {
    backgroundColor: "#70a5f9",
    borderRadius:40,
    width: "50%"
  }
});
export default connect(mapStateToProps)(Profile)