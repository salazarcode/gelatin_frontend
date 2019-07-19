import React from 'react';
import { 
  StyleSheet, 
  Text, 
  Platform,
  View, 
  Button, 
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import { connect } from 'react-redux'
import Wrapper from '../Wrapper'
import axios from "axios";
import moment from 'moment-with-locales-es6'

function mapStateToProps(state){
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch)
{
  return {
    
  };
}

class Mensajes extends React.Component 
{   
  state = {
    messages: [
      {
        id: 1,
        text:"Texto",
        created_at: "2018-01-10 13:14"
      }
    ],
    message: {
      text: undefined
    }
  }

  static navigationOptions = {
    header: null
  }

  componentDidMount(){
    //let chat_id = this.props.navigation.getParam("chat_id");
    /*
    let chat_id = 9;
    if(chat_id != undefined)
    {
      this._getMessages(chat_id);
      this.timer = setInterval(()=>{console.log("Llamada")}, 5000);
    }
    else
    {
      Alert.alert("No se pasó ningún chat.")
    }
    */

  }

  _getMessages = async (chat_id) => {
    let {env, prod, dev} = this.props.state;
    let base = env == "PROD" ? prod : dev;

    axios.defaults.headers.common['token'] = 'de23b0432024fb85fc6d948a9d656c2f7805629b6415ff8c';
    let m = await axios.get(base + '/chats/' + chat_id + '/messages/')
    .then((data)=>{
      if(data.data.success == 1)
      {
        this.setState({messages:data.data.data.messages});
      }
      else
      {
        Alert.alert("No se pudieron recuperar los mensajes del servidor")
      }      
    });
    console.log("Llamó y obtuvo los mensajes");
  }

  mensaje = (mensaje) => {
    return(
      <View style={{
        height:"auto",
        width: "100%",
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop:1
      }}>
        <View style={{
          height:"auto",
          width:"80%",
          borderRadius:5,
          backgroundColor:"ivory",
          elevation:2,
          margin:5,
          padding:10,
          alignItems:"center"
        }}>
          <Text style={{
            fontSize: 16,
            fontFamily: "NunitoRegular",
            color:"gray",
            alignSelf: 'flex-end'
          }}>
            {mensaje.text}          
          </Text>
          
          <Text style={{
            fontSize: 9,
            fontFamily: "NunitoBold",
            color:"silver",
            alignSelf: 'flex-end'
          }}>
            {mensaje.created_at}          
          </Text>
        </View>

      </View>
    )
  }

  render() {
      
    return (
      <Wrapper>
        <View style={{flex:0.9}}>
          <FlatList
            inverted={true}
            nestedScrollEnabled={true}
            style={{
              height:"100%"
            }}
            data={this.state.messages}
            renderItem={({item}) => this.mensaje(item)}
            keyExtractor={(item, index) => item.id.toString()}
          />
        </View>
        <View style={{flex:0.1, borderTopWidth: 1}}>
          <View style={{
            flex:1,
            flexDirection:"row"
          }}>
            <View 
              style={{
                flex:0.8,
                paddingLeft: 10,
                backgroundColor: 'ivory'
              }}
            >
              <TextInput
                style={{flex:1, fontFamily:"NunitoRegular", color:"gray", fontSize:14}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
              />
            </View>
            
            <View 
              style={{
                flex:0.2,
                backgroundColor:this.props.state.colores.azulClaro
              }}
            >
              <TouchableOpacity
                style={{flex:1, alignItems: 'center', justifyContent: 'center'}}
                onPress={
                  () => {
                  }
                }
              >
                <Text style={{color:"white"}}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </Wrapper>    
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mensajes)