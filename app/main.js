'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, NavigatorIOS, } from 'react-native';
import SearchPage from './components/search_page/search_page_container';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigatorIOS
        barTintColor={'#F70000'}
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
