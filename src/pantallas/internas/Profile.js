import React from 'react';
import { StyleSheet, Text, View, Image, Alert} from 'react-native';
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

  
  async logout(){
    let res = await axios({
      method: 'post',
      url: 'http://www.gelatin.ivorystack.com/api/logout',
      headers: {"token": this.props.state.authenticated.session_token}
    })
    .then((response)=>response.data)
    .catch((e)=>console.log(e)); 
    
    if(res.success == 1)
    {     
      this.props.navigation.navigate("Presentacion"); 
    }
    else
    {
      Alert.alert("Hubo algún problema para salir.");
    }



  }  
  render() {
    let img = this.props.state.authenticated.detail.profile_picture;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          style={{
            width: 200,
            height:200,
            alignSelf: "center",
            borderRadius: 50
          }}
          source={{uri:img != undefined ? img : ""}}
        />    
        <Button 
          title="Salir" //
          onPress={this.logout}
          style={styles.boton}
          loading={this.state.isLoading}
        >
          Cerrar Sesión
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