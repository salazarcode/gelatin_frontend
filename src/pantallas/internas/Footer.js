import React from 'react';
import { 
  Text, 
  View, 
  Image,
  TouchableOpacity

} from 'react-native';
import { connect } from 'react-redux'

function mapStateToProps(state){
  return {
    state: state
  }
}

class Footer extends React.Component 
{   
  _goTo(route)
  {
    this.props.navigation.navigate(route)
  }
  render() {
    
    let iconSize = {height:30, width:30};
    return (
        <View style={{
          flex:1, 
          backgroundColor:"white",
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
          <TouchableOpacity onPress={()=>{
            this._goTo("Dashboard")
          }}>
            <Image
              style={iconSize}
              source={require('../../assets/img/menu_footer/home.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{
            this._goTo("Entrenamiento")
          }}>
            <Image
              style={iconSize}
              source={require('../../assets/img/menu_footer/entrenamiento.png')}
            />            
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{
            this._goTo("Dashboard")
          }}>
            <Image
              style={iconSize}
              source={require('../../assets/img/menu_footer/options.png')}
            />            
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{
            this._goTo("Dashboard")
          }}>
            <Image
              style={iconSize}
              source={require('../../assets/img/menu_footer/recetas.png')}
            />            
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{
            this._goTo("Dashboard")
          }}>
            <Image
              style={iconSize}
              source={require('../../assets/img/menu_footer/recetas.png')}
            />            
          </TouchableOpacity>
        </View>    
    );
  }
}

export default connect(mapStateToProps)(Footer)