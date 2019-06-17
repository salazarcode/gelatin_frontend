import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { connect } from 'react-redux'

import Profile from './HomeWrapper/Profile'
import Chat from './HomeWrapper/Chat'
import Dashboard from './HomeWrapper/Dashboard'
import Desafios from './HomeWrapper/Desafios'
import Recetas from './HomeWrapper/Recetas'


function mapStateToProps(state){
    return {
      state: state
    }
  }

class HomeWrapper extends React.Component {
    constructor(props){
        super(props);
    }
    static navigationOptions = {
        header: null
    }
    state = {
        index: 0,
        routes: [
        { key: 'Profile', title: 'Profile', icon: 'account-circle', color: 'silver'  },
        { key: 'Chat', title: 'Chat', icon: 'chat', color: 'silver'  },
        { key: 'Dashboard', title: 'Dashboard', icon: 'home', color: 'silver'  },
        { key: 'Desafios', title: 'Desafios', icon: 'notifications-active', color: 'silver'  },
        { key: 'Recetas', title: 'Recetas', icon: 'home', color: 'silver'  },
        ],
    };

    _handleIndexChange = index => this.setState({ index });

    /*_renderScene = BottomNavigation.SceneMap({
        Profile: Profile,
        Chat:Chat,
        Dashboard: Dashboard,
        Desafios: Desafios,
        Recetas: Recetas
    });*/

    _renderScene = ({ route, jumpTo }) => {
            switch (route.key) {
            case 'Profile':
                return <Profile salida={{ nav : this.props.navigation }} jumpTo={jumpTo} />;

            case 'Chat':
                return <Chat jumpTo={jumpTo} />;

            case 'Dashboard':
                return <Dashboard jumpTo={jumpTo} />;

            case 'Desafios':
                return <Desafios jumpTo={jumpTo} />;

            case 'Recetas':
                return <Recetas jumpTo={jumpTo} />;
        }
      }

    render() {
        const {estaFuera} = this.props.state.estaFuera;
        if(estaFuera)
            this.props.navigation.navigate("Opciones");
        else
            return(
                <BottomNavigation
                    navigationState={this.state}
                    onIndexChange={this._handleIndexChange}
                    renderScene={this._renderScene}
                />
            )
    }
}

export default connect(mapStateToProps)(HomeWrapper)