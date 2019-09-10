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
    messages: [],
    message: undefined,
    chat_id: undefined,
    text: "",
    timer: undefined
  }

  static navigationOptions = {
    header: null
  }

  componentDidMount(){
    this.setState({chat_id:this.props.navigation.getParam("chat_id")});
    this.setState({chat_id:6});
    this.timer = setInterval(()=>this._getMessages(6), 1000);
  }

  _getMessages = async (chat_id) => {
    let {env, prod, dev} = this.props.state;
    let base = env == "PROD" ? prod : dev;

    chat_id = 6;

    axios.defaults.headers.common['token'] = this.props.state.authenticated.token;
    let m = await axios.get(base + '/chats/' + chat_id + '/messages')
    .then(r => this.setState({messages:r.data.data.messages}))
    .catch(e=> console.log(e))
  }

  mensaje = (mensaje) => {
    return(
      <View style={{
        height:"auto",
        width: "100%",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: this.props.state.authenticated.id == mensaje.user_id ? 'flex-end' : "flex-start",
        marginTop:1,
      }}>
        <View style={{
          height:"auto",
          width:"80%",
          borderRadius:5,
          backgroundColor:this.props.state.authenticated.id == mensaje.user_id ? this.props.state.colores.azulClaro : this.props.state.colores.azulOscuro,
          elevation:2,
          margin:5,
          padding:10,
          alignItems:"center"
        }}>
          <Text style={{
            fontSize: 16,
            fontFamily: "NunitoRegular",
            color:"white",
            alignSelf: 'flex-end'
          }}>
            {mensaje.text}          
          </Text>
          
          <Text style={{
            fontSize: 9,
            fontFamily: "NunitoBold",
            color:"white",
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
                onChangeText={(text) => this.setState({text:text})}
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
                  async () => 
                  {
                    let {env, prod, dev} = this.props.state;
                    let base = env == "PROD" ? prod : dev;
                    await axios({
                      method: 'post',
                      url: base + "/chats/"+this.state.chat_id+"/messages",
                      data: {
                        text: this.state.text,
                        chat_id: this.state.chat_id
                      }
                    })
                    .then(()=>{
                      this._getMessages(this.state.chat_id);
                      this.setState({text:""}); 
                    })
                    .catch((e)=>console.log({error_trimalayo: e}));   

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