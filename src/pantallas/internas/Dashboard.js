import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView, ImageBackground, Image } from 'react-native';
import { Surface, IconButton, Divider, Badge } from 'react-native-paper';
import { connect } from 'react-redux'
import moment from 'moment-with-locales-es6'

import Chip from '../../componentes/Chip'
import Card from '../../componentes/MyCard'
import MainHeader from '../../componentes/MainHeader'

import Actividades from '../../componentes/Actividades'
import Sugerencias from '../../componentes/Sugerencias'
import ComoTeSientes from '../../componentes/ComoTeSientes'
import Comidas from '../../componentes/Comidas'
import Agua from '../../componentes/Agua'
import DatosCardiovasculares from '../../componentes/DatosCardiovasculares'
import AlarmaPrincipal from '../../componentes/AlarmaPrincipal'
import Fecha from '../../componentes/Fecha'
import Wrapper from './Wrapper'



import {
  theColor, 
  theElevation, 
  theSize, 
  styles
} from '../../styles/dashboard'

class Dashboard extends React.Component 
{        
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <Wrapper>
        <ScrollView 
          style={{ 
            flexDirection: "column", 
            backgroundColor: "#f5f5f5", 
            marginTop:24
          }} 
          stickyHeaderIndices={[0]}
        >            
          <MainHeader/>

          <View style={{flex:1, zIndex:1}}>
            <Card width="60%" height="2.5%" padding={20} alignItems="center" justifyContent="center">
              <Text style={{color:"#3FC1C9", fontSize:14,  fontFamily:"NunitoBold",}}>300 Calorias Quemadas</Text>
            </Card>
            
            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: "space-between",
              marginLeft: "5%",
              marginRight: "5%",
            }}>            
              <Card 
                width="50%" 
                height={40} 
                backgroundColor="#3FC1C9"  
                paddingLeft={20} 
                paddingRight={20} 
                paddingBottom={20} 
                paddingTop={20} 
                alignItems="center" 
                justifyContent="center"
              >
                <Text style={{color:"white", fontSize:12,  fontFamily:"NunitoBold"}}>ACTUALIZAR PESO</Text>
              </Card>
              <Card 
                width={40} 
                height={40} 
                backgroundColor="#3FC1C9"   
                paddingLeft={20} 
                paddingRight={20} 
                paddingBottom={20} 
                paddingTop={20} 
                borderRadius={30} 
                alignItems="center" 
                justifyContent="center"
              >
                <IconButton
                        icon="notifications-active"
                        color="white"
                        size={20}
                        onPress={() => console.log('Pressed')}
                      /> 
              </Card> 
            </View>   
        
            <Fecha />
            <Sugerencias/>  
            <AlarmaPrincipal/>                
            <Comidas/>    
            <Agua/>     
            <DatosCardiovasculares/>  
            <Actividades/>       
          </View>
        </ScrollView>        
      </Wrapper>

    );
  }
}

export default connect(null)(Dashboard)