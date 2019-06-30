import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Platform } from 'react-native';
import {Button} from 'react-native-paper'
import { connect } from 'react-redux'
import {facebookInfo, googleInfo} from './servicios/rrssllogin'
import BackButton from '../../componentes/BackButton'
import FooterIniciarSesion from '../../componentes/FooterIniciarSesion'
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
      correo: "",
      password: "",
      isLoading: false,
      token: "",
      pictureUri: undefined,
      FacebookInfo: undefined,
      GoogleInfo: undefined
    };
    this.login = this.login.bind(this)
    this.FacebookLogin = this.FacebookLogin.bind(this);
    this.GoogleLogin = this.GoogleLogin.bind(this);
  }  

  async FacebookLogin() 
  {
    let fbInfo = facebookInfo();
    await this.props.dispatch({
      type: "SET_GOOGLE",
      payload: {
        facebook: fbInfo
      }
    });   

    if(fbInfo != undefined)
    {
      let res = await axios.post("https://ivorystack.com/mainbk/public/api/" + 'login', {
        correo: fbInfo.email,
        facebook: 1
      });      

      if(res.data.success == 1)
      {
        await this.props.dispatch({
          type: "SET_TOKEN",
          payload: {
            token: res.data.data.token
          }
        });
        this.props.navigation.navigate("HomeWrapper");
      }
    }
  }

  async GoogleLogin() {
    const {user} = googleInfo();
    await this.props.dispatch({
      type: "SET_GOOGLE", //
      payload: {
        google: user
      }
    });    

    let res = await axios.post("https://ivorystack.com/mainbk/public/api/" + 'login', {
      correo: user.email,
      gmail: 1
    });           
    
    if(res.data.success == 1)
    {
      await this.props.dispatch({
        type: "SET_TOKEN",
        payload: {
          token: res.data.data.token
        }
      });
      
      this.props.navigation.navigate("HomeWrapper");
    }
  }

  async login(){
    let correo = this.state.correo;
    let password = this.state.password;
    await this.setState({"isLoading": true});

    let res = await axios.post("https://ivorystack.com/mainbk/public/api/" + 'login', {
        correo: correo,
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
        this.props.navigation.navigate('HomeWrapper')//
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
      <View style={{flex:1, alignItems:"center", justifyContent:"center", backgroundColor:this.props.state.colores.fondo}}> 
        <BackButton goBack={this.props.navigation}/>
        
        <Image
          style={{width: 50, height:50, marginTop:10, marginBottom:20}}
          source={require('../../assets/img/logo.png')}
        />

        <View style={{width:"100%", marginTop:"2%", marginBottom:"2%", height:"auto", alignItems:"center", justifyContent:"center"}}>
          <Text style={{fontFamily:"NunitoBold", fontSize:30}}>Iniciar sesión</Text>
        </View>
        
        <View style={{width:"100%", marginTop:"2%", marginBottom:"2%", height:"auto", alignItems:"center", justifyContent:"center"}}>
          <Text style={{fontFamily:"NunitoRegular", fontSize:12}}>INICIA SESIÓN CON FACEBOOK O GOOGLE</Text>
        </View>

        <View style={{
          width:"100%", 
          paddingLeft: "10%",
          paddingRight: "10%",
          marginTop: 10,
          height:"auto", 
          flexDirection: "row",
          alignItems:"center", 
          justifyContent:"space-between"
        }}>
          <Button  
            mode="contained" 
            contentStyle={{
              height: 30,
              width: 140
            }} 
            style={{
              borderRadius:15,
              elevation:7
            }}
            color="#3b5998"
            onPress={this.FacebookLogin}
          >
              <Text style={{fontFamily: "NunitoBold", fontSize:20, color:"white"}}>f</Text>
          </Button>
          
          <Button  
            mode="contained" 
            contentStyle={{
              height: 30,
              width: 140
            }} 
            style={{
              borderRadius:15,
              elevation:7
            }}
            color="#db4a39"
            onPress={this.GoogleLogin}
          >
            <Text style={{fontFamily: "NunitoBold", fontSize:20, color:"white"}}>G</Text>
          </Button>
        </View>

        
        <View style={{width:"100%", marginTop:"6%", marginBottom:"2.5%", height:"auto", alignItems:"center", justifyContent:"center"}}>
          <Text style={{fontFamily:"NunitoRegular", fontSize:12}}>O INICIA SESIÓN CON UN CORREO</Text>
        </View>

        <TextInput
          style={{
            height: 40, 
            width: "100%",
            marginLeft:"20%",
            marginRight:"20%",
            paddingLeft:10,
            borderRadius:20,
            backgroundColor:"white",
            elevation:7,
            fontFamily:"NunitoRegular",
            fontSize: 12
          }}
          onChangeText={(text) => {this.setState({correo:text})}}
          placeholder="CORREO"
        />

        <TextInput
          style={{
            height: 45, 
            width: "100%",
            marginLeft:"20%",
            marginRight:"20%",
            marginTop:"3%",
            paddingLeft:10,
            borderRadius:22.5,
            backgroundColor:"white",
            elevation:7,
            fontFamily:"NunitoRegular",
            fontSize: 12
          }}
          onChangeText={(text) => {this.setState({password:text})}}
          secureTextEntry={true}
          placeholder="PASSWORD"
        />

        <Button  
          mode="contained" 
          contentStyle={{
            height: 50,
            width: 150
          }} 
          style={{
            borderRadius:25,
            marginTop: 10,
            elevation:7
          }}
          color={this.props.state.colores.azulClaro}
          onPress={() => this.props.navigation.navigate('Login')}
        >
            <Text style={{fontFamily: "NunitoBold", fontSize:14, color:"white"}}>Iniciar sesión</Text>
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

export default connect(mapStateToProps)(LoginScreen)