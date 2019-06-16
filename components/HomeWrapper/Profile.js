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
      isLoading: false
    };
  } 

  
  async logout(){
    const {token} = this.props.state.token;
    console.log(token);/*
    let res = await axios({
      method: 'post',
      url: 'http://192.168.43.27/gelatin/public/api/logout',
      headers: {"token": token}
    })
    .then((response)=> {
      return response.data
    });    
    console.log(res);*/
  }  
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>    
        <Text>Profile {this.props.state.token}</Text>
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
  boton: {
    backgroundColor: "#70a5f9",
    borderRadius:40,
    width: "50%"
  }
});
export default connect(mapStateToProps)(Profile)