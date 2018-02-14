'use strict';

import React from 'react';
import { StyleSheet, Text, View, NavigatorIOS, } from 'react-native';
import SearchPage from './SearchPage';

export default class App extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Photo Search',
          component: SearchPage,
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
