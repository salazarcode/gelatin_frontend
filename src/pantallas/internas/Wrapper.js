import React from 'react';
import { 
  StyleSheet, 
  Text, 
  Platform,
  View, 
  Button, 
  SafeAreaView, 
  KeyboardAvoidingView, 
  ScrollView 
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
      <SafeAreaView style={{flex:1}}>
        <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>    
          <View style={{flex:0.9, backgroundColor:this.props.state.colores.fondo}} >
                  
              {this.props.children}
                    
          </View>  
          <View style={{flex:0.1}}>
            <Footer/>
          </View>  
        </KeyboardAvoidingView>  
      </SafeAreaView>      
    );
  }
}

export default connect(mapStateToProps)(Wrapper)