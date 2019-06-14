import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AppContainer from './navigation/Router';

import { Provider as PaperProvider } from 'react-native-paper';

import { Provider } from 'react-redux';
import store from './store/Store';

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <Provider store={store}>
          <AppContainer />
        </Provider> 
      </PaperProvider>

    );
  }
}