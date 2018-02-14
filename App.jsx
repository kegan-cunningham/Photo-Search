'use strict';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return React.createElement(Text, {style: styles.appheader}, "Search for your favorite images!");
  }
}

const styles = StyleSheet.create({
  appheader: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
});
