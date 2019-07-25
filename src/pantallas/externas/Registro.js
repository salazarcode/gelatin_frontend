import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Platform, Alert, ScrollView, KeyboardAvoidingView } from 'react-native';
import {Button} from 'react-native-paper'
import { connect } from 'react-redux'
import {facebookInfo, googleInfo} from './servicios/rrssllogin'
import BackButton from '../../componentes/BackButton'
import FooterIniciarSesion from '../../componentes/FooterIniciarSesion'
import axios from 'axios'
import Actions from '../../store/Actions'

function mapStateToProps(state){
  return {
    state: state
  }
}

class RegistroScreen extends React.Component 
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
      urlRegistro: "https://ivorystack.com/mainbk/api/users"
    };
    this.registro = this.registro.bind(this)
    this.getFacebookInfo = this.getFacebookInfo.bind(this)
    this.getGoogleInfo = this.getGoogleInfo.bind(this)
  } 

  componentDidMount = async () => {    
    let {env, prod, dev} = this.props.state;
    let base = env == "PROD" ? prod : dev;
    axios({
      method: 'post',
      url: base + "/details",
      data: {
        habitos: [
          {id:1},
          {id:2},
        ]
      }
    })
    .then((res)=>console.log(res.data))
    .catch((e)=>console.log({error_trimalayo: e}));
  }

  async getFacebookInfo(){
    let fbInfo = await facebookInfo();
    await this.props.dispatch({
      type: "SET_FACEBOOK",
      payload: {
        facebook: fbInfo
      }
    });  
    this.setState({correo: this.props.state.facebook.email});   
  }

  async getGoogleInfo(){
    let {user} = await googleInfo();
    await this.props.dispatch({
      type: "SET_GOOGLE",
      payload: {
        google: user
      }
    }); 
    this.setState({correo: this.props.state.google.email});   
  }

  async registro(type){ 
    if(this.state.password == "" || this.state.correo == "")
    {
      Alert.alert(
        'Validación de registro',
        'Debes ingresar una contraseña y un correo para registrarte',
        [
          {text: 'Cerrar', onPress: () => console.log('No introdujo la contraseña o el correo')},
        ],
        {cancelable: false},
      );
    }
    let res = await axios.post(this.state.urlRegistro, {
      email: this.state.correo,
      password: this.state.password,
      role_id: 1
    });  

    this.props.dispatch(Actions.setAuthenticated(res.data.data));
    this.props.navigation.navigate("DatosPersonales");
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ScrollView contentContainerStyle={{flex:1, alignItems:"center", justifyContent:"center", backgroundColor:this.props.state.colores.fondo}}> 
          <BackButton goBack={this.props.navigation}/>          
          <Image
            style={{width: 50, height:50, marginTop:10, marginBottom:20}}
            source={require('../../assets/img/logo.png')}
          />
          <View style={{width:"100%", marginTop:"2%", marginBottom:"2%", height:"auto", alignItems:"center", justifyContent:"center"}}>
            <Text style={{fontFamily:"NunitoBold", fontSize:30}}>Crear una cuenta</Text>
          </View>
          
          <View style={{width:"100%", marginTop:"2%", marginBottom:"2%", height:"auto", alignItems:"center", justifyContent:"center"}}>
            <Text style={{fontFamily:"NunitoRegular", fontSize:12}}>CREAR UNA CUENTA CON FACEBOOK O GOOGLE</Text>
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
              onPress={this.getFacebookInfo}
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
              onPress={this.getGoogleInfo}
            >
              <Text style={{fontFamily: "NunitoBold", fontSize:20, color:"white"}}>G</Text>
            </Button>
          </View>

          
          <View style={{width:"100%", marginTop:"6%", marginBottom:"2.5%", height:"auto", alignItems:"center", justifyContent:"center"}}>
            <Text style={{fontFamily:"NunitoRegular", fontSize:12}}>O CREA UNA CUENTA CON UN CORREO</Text>
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
            value={this.state.correo}
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
            onPress={this.registro}
          >
              <Text style={{fontFamily: "NunitoBold", fontSize:14, color:"white"}}>Crear cuenta</Text>
          </Button>    
        </ScrollView>
      </KeyboardAvoidingView>
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

export default connect(mapStateToProps)(RegistroScreen)