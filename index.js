import { AppRegistry } from 'react-native';
import Main from './app/main';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import Reducer from './app/reducers/reducer';
import configureStore from './app/store/store';

const store = configureStore();
console.disableYellowBox = true

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
