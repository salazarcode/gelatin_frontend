import React from 'react';
import { 
  Platform,
  View,
  SafeAreaView,
  KeyboardAvoidingView
} from 'react-native';

import { connect } from 'react-redux'
import Footer from './Footer'

function mapStateToProps(state){
  return {
    state: state
  }
}

class Wrapper extends React.Component 
{   
  static navigationOptions = {
    header: null
  }
  render() {    
    return (
      <SafeAreaView style={{flex:1, paddingTop:Platform.OS == "android" ? 24 : 0}}>
        <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>  
          <View style={{flex:1, backgroundColor:this.props.state.colores.fondo}}>
            {this.props.children}                 
          </View>  
        </KeyboardAvoidingView>  
      </SafeAreaView>      
    );
  }
}

export default connect(mapStateToProps)(Wrapper)