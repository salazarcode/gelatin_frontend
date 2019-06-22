import React from 'react';
import { View, Image, ImageBackground, Text} from 'react-native';
import { Divider } from 'react-native-paper';

class CardSugerencia extends React.Component 
{    
  render() {
    return (
      <View style={{
        width: 200,
        height:110,
        backgroundColor:this.props.bg,
        borderRadius:10,
        margin:5,
        flexDirection:"row",
      }}>
        <Image 
          source={this.props.image} 
          style={{width: '40%', height: '100%', borderTopLeftRadius: 10, borderBottomLeftRadius:10}}
        />
        <View style={{width:"60%", height:"100%"}}>
          <Text style={{flex:1,flexWrap: "wrap", fontSize:12, fontFamily:"NunitoBold", color:"white", paddingLeft: 10, paddingTop: 10}}>
            {this.props.texto}
          </Text>          
          <View style={{
            flex:1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent:"flex-end"
          }}>
            <Text style={{color:"white", alignSelf:"flex-end", fontFamily:"NunitoRegular", fontSize:10, marginRight:15, marginBottom:10}}>Leer más</Text>
          </View>
        </View>

      </View>
    );
  }
}

export default CardSugerencia