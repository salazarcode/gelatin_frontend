import React from 'react';
import { 
  Text, 
  View, 

} from 'react-native';
import { connect } from 'react-redux'

function mapStateToProps(state){
  return {
    state: state
  }
}

class Footer extends React.Component 
{   
  render() {
    return (
        <View style={{flex:1, backgroundColor:"navy"}}>
            <Text style={{color:"white"}}>Footer</Text>
        </View>    
    );
  }
}

export default connect(mapStateToProps)(Footer)