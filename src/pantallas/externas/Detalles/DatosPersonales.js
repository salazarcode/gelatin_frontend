import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput,
  View, 
  Picker,
  Platform,
  ScrollView, 
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';
import {Button} from 'react-native-paper' 
import Wrapper from './Wrapper'
import { connect } from 'react-redux'
import BackButton from '../../../componentes/BackButton'
import Footer from './Footer'
import Actions from "../../../store/Actions";
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

function mapStateToProps(state)
{
  return {
    sexo: state.registro.sexo,
    nombre: state.registro.nombre,
    edad: state.registro.edad,
    estatura: state.registro.estatura,
    ubicacion: state.registro.ubicacion,
    profile_picture: state.registro.profile_picture,
    colores:state.colores
  }
}

function mapDispatchToProps (dispatch)
{
    return {
      setSexo: (sexo) => dispatch(Actions.setRegistro("sexo", sexo)),
      setNombre: (nombre) => dispatch(Actions.setRegistro("nombre", nombre)),
      setEdad: (edad) => dispatch(Actions.setRegistro("edad", edad)),
      setEstatura: (estatura) => dispatch(Actions.setRegistro("estatura", estatura)),
      setUbicacion: (location) => dispatch(Actions.setRegistro("ubicacion", location)),
      setPicture: (profile_picture) => dispatch(Actions.setRegistro("profile_picture", profile_picture)),
    };
}

class DatosPersonales extends React.Component 
{    
  constructor(props)
  {
    super(props)
    this.state = {
      location: undefined,
      locationError: undefined,      
      image: "",
      hasCameraPermission: false
    }
    this._getLocationAsync = this._getLocationAsync.bind(this);
  }
  static navigationOptions = {
      header: null
  }
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }

    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
  _takePicture = async () => {
    if(this.state.hasCameraPermission)
    {
        let result = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
        });

        if (!result.cancelled) {
          this.setState({ image: result });
        }        
    }
    else
    {
        console.log("No tienes acceso a la cámara");
    }
  };
      
  async componentDidMount(){
    this.getPermissionAsync();
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        locationError: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }
  _setSexo(sexo){
    this.props.dispatch(Actions.setRegistro("sexo", sexo));
  }
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationError: 'Permission to access location was denied',
      });
    }  
    let location = await Location.getCurrentPositionAsync({});
    this.props.setUbicacion(JSON.stringify(location));   
  };  
  
  IntArray = (start, end) => {
    let arr = [];
    for(let n = start; n <= end; n++)
      arr.push(n);
      return arr;
  }

  render() {  
    let edades = this.IntArray(18, 130).map((item)=>{
      return <Picker.Item key={item.toString()} label={item.toString()} value={item.toString()} />
    });

    let estaturas = this.IntArray(100, 200).map((item)=>{
      return <Picker.Item key={item.toString()} label={item.toString()} value={item.toString()} />
    });
    return (
      <Wrapper>
        <ScrollView style={{flex:1}}>
          <BackButton />
          <Image
            style={{
              width: "100%",
              height:400
            }}
            source={require("../../../assets/img/imagen-referencial.png")} />
          <Text style={{fontFamily:"NunitoBold", fontSize:30, alignSelf: 'center', marginTop:10, marginBottom:10}}>Datos personales</Text>
          <TouchableOpacity 
            style={{
              alignSelf: 'center',
            }}
            onPress={this._takePicture}
          >
            <Image 
              style={{
                height: 100,
                width: 100
              }}
              source={this.state.image == "" ? require("../../../assets/img/default_profile_picture.png") : {uri:this.state.image.uri}}
            />
          </TouchableOpacity>
          <View style={{
            width:"100%",
            height:"auto",
            backgroundColor:"transparent",
            flexDirection: 'row',
            marginTop:10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Text style={{fontFamily:"NunitoRegular", fontSize:12, margin:5}}>HOMBRE</Text>
            <TouchableOpacity
              style={{
                height:20,
                width:40,
                borderRadius:10,
                marginLeft:5,                  
                backgroundColor:this.props.sexo == "HOMBRE" ? this.props.colores.azulClaro : "silver"
              }}
              onPress={()=>this.props.setSexo("HOMBRE")}
            ></TouchableOpacity>
            
            <TouchableOpacity
              style={{
                height:20,
                width:40,
                borderRadius:10,
                marginLeft:3,
                marginRight:5,               
                backgroundColor:this.props.sexo == "MUJER" ? this.props.colores.azulClaro : "silver"
              }}
              onPress={()=>this.props.setSexo("MUJER")}
            ></TouchableOpacity>
            <Text style={{fontFamily:"NunitoRegular", fontSize:12, margin:5}}>MUJER</Text>
          </View>

          <TextInput
            style={{
              height: 40, 
              width:"80%",
              borderRadius:20,
              margin:5,
              elevation:4,
              backgroundColor: 'white', 
              alignSelf: 'center',
              paddingLeft:10

            }}
            onChangeText={(text) => this.props.setNombre(text)}
            value={this.props.nombre}
            placeholder="NOMBRE"
          />
        
        <View style={{
          width:"80%",
          height:80,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent:"space-between",
          alignSelf:"center",
        }}>
          <View style={{
            height:40,
            width: "45%",
            alignItems: 'center',
            justifyContent:"center",
          }}>
            <Text style={{fontFamily:"NunitoRegular", fontSize:12, alignSelf: 'center', marginBottom:5}}>EDAD</Text>
            <View style={{
              borderRadius: 20,
              height:40,
              width: "100%",
              backgroundColor:"white",
              elevation:4,
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent:"center",
              paddingLeft:10
            }}>
              <Picker
                selectedValue={this.props.edad}
                style={{
                  height: 40, 
                  width: "100%",
                  margin:5
                }}
                onValueChange={(itemValue, itemIndex) => this.props.setEdad(itemValue) }>
                  {edades}
              </Picker>              
            </View>              
          </View>



          <View style={{
            height:40,
            width: "45%",
            alignItems: 'center',
            justifyContent:"center",
          }}>
            <Text style={{fontFamily:"NunitoRegular", fontSize:12, alignSelf: 'center', marginBottom:5}}>ESTATURA (cms)</Text>
            <View style={{
              borderRadius: 20,
              height:40,
              width: "100%",
              backgroundColor:"white",
              elevation:4,
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent:"center",
              paddingLeft:10
            }}>
            <Picker
              selectedValue={this.props.estatura}
              style={{
                height: 40, 
                width: "100%",
                margin:5
              }}
              onValueChange={(itemValue, itemIndex) => this.props.setEstatura(itemValue) }>
                {estaturas}
            </Picker>     
            </View>         
          </View>
        </View>

        <TouchableOpacity 
        style={{
          height:50,
          width:"40%",
          backgroundColor:this.props.colores.azulClaro,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent:"center",
          marginTop:10, 
          marginBottom: 30,
          borderRadius:25
        }}
        onPress={()=>{           
          let uriParts = this.state.image.uri.split('/');
          let name = uriParts[uriParts.length - 1];
          let ext = "image/"+name.split('.')[1];
          
          this.props.setPicture(this.state.image != "" ? {
            uri:Platform.OS === "android" ? this.state.image.uri : this.state.image.uri.replace("file://", ""),
            name:name,
            type:ext
          } : "");
          this.props.navigation.navigate("CualEsTuObjetivo") 
        }}
        >
          <Text style={{fontFamily:"NunitoBold", fontSize:20, color:"white"}}>Siguiente</Text>
        </TouchableOpacity>
  
        <Footer />    
        </ScrollView>   
      </Wrapper>        
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DatosPersonales)
