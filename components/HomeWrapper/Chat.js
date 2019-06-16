import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux'

class Chat extends React.Component 
{   
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>    
        <Text>Chat</Text> 
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default connect(null)(Chat)