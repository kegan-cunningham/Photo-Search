import { AppRegistry } from 'react-native';
import Main from './main';
import React from 'react';
import { createStore } from 'redux';
import {Provider} from 'react-redux'
import Reducer from './reducer';
import configureStore from './store';

const store = configureStore();

class PhotoSearch extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('PhotoSearch', () => PhotoSearch);
