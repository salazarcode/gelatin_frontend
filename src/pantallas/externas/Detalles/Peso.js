import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput,
  View, 
  Picker,
  ScrollView, 
  TouchableOpacity,
  Image
} from 'react-native';

import {
  Button
} from 'react-native-paper' 

import Wrapper from './Wrapper'
import { connect } from 'react-redux'
import BackButton from '../../../componentes/BackButton'
import Footer from './Footer'

function mapStateToProps(state){
  return {
    state: state
  }
}

class Peso extends React.Component 
{    
    state = {
      peso_actual: undefined,
      cintura: undefined,
      peso_ideal: undefined
    }
    static navigationOptions = {
        header: null
    }

    IntArray = (start, end) => {
      let arr = [];
      for(let n = start; n <= end; n++)
        arr.push(n);
        return arr;
    }


    render() {        
      let sentences = {fontFamily:"NunitoRegular", fontSize:10, alignSelf: 'center', marginBottom:5};
      let box = {
        width:"85%",
        height:50,
        marginBottom:10,
        //backgroundColor:"silver",
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent:"space-between",
        alignItems: 'center',
      };
      let pickWrapper = {
        borderRadius: 20,
        height:40,
        width: "35%",
        backgroundColor:"white",
        elevation:4,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent:"center",
        paddingLeft:10
      };
      let pesos = this.IntArray(20, 200).map((item)=>{
        return <Picker.Item key={item.toString()} label={item.toString()} value={item.toString()} />
      });
       
      let circunferencias = this.IntArray(20, 500).map((item)=>{
        return <Picker.Item key={item.toString()} label={item.toString()} value={item.toString()} />
      });
      return (
        <Wrapper>
          <ScrollView style={{flex:1}}>
            <BackButton nav={this.props.navigation}/>
            <Image
              style={{
                width: "100%",
                height:400
              }}
              source={require("../../../assets/img/imagen-referencial.png")} 
            />
            <Text style={{fontFamily:"NunitoBold", fontSize:30, alignSelf: 'center', marginTop:10, marginBottom:10}}>
              Peso
            </Text>
          
            <View 
            style={box}
          >
            <Text style={sentences}>¿CUAL ES TU PESO ACTUAL? [Kgs.]</Text>
            <View style={pickWrapper}>
                <Picker
                  selectedValue={this.state.peso}
                  style={{
                    height: 40, 
                    width: "100%",
                    margin:5,
                    fontFamily:"NunitoRegular",
                  }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({peso: itemValue})
                  }>
                    {pesos}
                </Picker>              
              </View> 
          </View>

          <View  style={box} >
            <Text style={sentences}>CIRCUNFERENCIA DE LA CINTURA [Cms.]</Text>
            <View style={pickWrapper}>
                <Picker
                  selectedValue={this.state.cintura}
                  style={{
                    height: 40, 
                    width: "100%",
                    margin:5,
                    fontFamily:"NunitoRegular"
                  }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({cintura: itemValue})
                  }>
                    {circunferencias}
                </Picker>              
              </View> 
          </View>

          <View style={box} >
            <Text style={sentences}>¿CUAL ES TU PESO IDEAL? [Kgs.]</Text>
            <View style={pickWrapper}>
                <Picker
                  selectedValue={this.state.peso}
                  style={{
                    height: 40, 
                    width: "100%",
                    margin:5,
                    fontFamily:"NunitoRegular"
                  }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({peso: itemValue})
                  }>
                    {pesos}
                </Picker>              
              </View> 
          </View>

          <TouchableOpacity 
            style={{
              height:50,
              width:"30%",
              backgroundColor:this.props.state.colores.azulClaro,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent:"center",
              marginTop:10, 
              marginBottom: 30,
              borderRadius:25
            }}
            onPress={()=>{
              this.props.navigation.navigate("Peso");
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

export default connect(mapStateToProps)(Peso)