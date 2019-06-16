import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import Profile from './HomeWrapper/Profile'
import Chat from './HomeWrapper/Chat'
import Dashboard from './HomeWrapper/Dashboard'
import Desafios from './HomeWrapper/Desafios'
import Recetas from './HomeWrapper/Recetas'

export default class HomeWrapper extends React.Component {
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

    _renderScene = BottomNavigation.SceneMap({
        Profile: Profile,
        Chat:Chat,
        Dashboard: Dashboard,
        Desafios: Desafios,
        Recetas: Recetas
    });

    render() {
        return (
        <BottomNavigation
            navigationState={this.state}
            onIndexChange={this._handleIndexChange}
            renderScene={this._renderScene}
        />
        );
    }
}