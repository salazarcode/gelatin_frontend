import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { Image } from 'react-native';
import { connect } from 'react-redux'

import Profile from './Profile'
import Chat from './Chat'
import Dashboard from './Dashboard'
import Desafios from './Desafios'
import Recetas from './Recetas'


//iconos:
import homeIcon from '../../assets/img/home.png' 
import profileIcon from '../../assets/img/perfil.png' 
import desafiosIcon from '../../assets/img/desafios.png' 
import chatIcon from '../../assets/img/Entrenamiento.png' 
import recetasIcon from '../../assets/img/recetas.png' 


function mapStateToProps(state){
    return {
      state: state
    }
  }

class HomeWrapper extends React.Component {
    constructor(props){
        super(props);
        this._goTo = this._goTo.bind(this);
        this._logout = this._logout.bind(this);
    }
    static navigationOptions = {
        header: null
    }
    color = ()=>{return "white"};

    state = {
        index: 2,
        routes: [
        { key: 'Profile', title: 'Profile', icon: profileIcon, color: this.color()},
        { key: 'Chat', title: 'Chat', icon: chatIcon, color: this.color()},
        { key: 'Dashboard', title: 'Dashboard', icon: homeIcon, color: this.color()},
        { key: 'Desafios', title: 'Desafios', icon: desafiosIcon, color: this.color()},
        { key: 'Recetas', title: 'Recetas', icon: recetasIcon, color: this.color()},
        ],
    };

    _handleIndexChange = index => this.setState({ index });

    _logout(){
        this.props.navigation.navigate("Opciones")
    }    
    
    _goTo(route){
        this.props.navigation.navigate(route)
    }
    
    _renderScene = ({ route, jumpTo }) => {
            switch (route.key) {
            case 'Profile':
                return <Profile logout={this._logout} goTo={this._goTo} jumpTo={jumpTo} />;

            case 'Chat':
                return <Chat logout={this._logout} goTo={this._goTo} jumpTo={jumpTo} />;

            case 'Dashboard':
                return <Dashboard logout={this._logout} goTo={this._goTo} jumpTo={jumpTo} />;

            case 'Desafios':
                return <Desafios logout={this._logout} goTo={this._goTo} jumpTo={jumpTo} />;

            case 'Recetas':
                return <Recetas logout={this._logout} goTo={this._goTo} jumpTo={jumpTo} />;
        }
      }

    render() {
        return(
            <BottomNavigation
                navigationState={this.state}
                onIndexChange={this._handleIndexChange}
                renderScene={this._renderScene}
                inactiveColor="#e539c8"
                activeColor="#e539c8"
                barStyle={{ 
                    elevation:7
                }}
            />
        )
    }
}

export default connect(mapStateToProps)(HomeWrapper)