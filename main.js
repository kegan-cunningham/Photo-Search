'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, NavigatorIOS, } from 'react-native';
import { portraitOrientation, landscapeOrientation } from './actions';
import SearchPage from './search_page_container';

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

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


function mapDispatchToProps(dispatch) {
  return {
    portraitOrientation: () => dispatch(portraitOrientation()),
    landscapeOrientation: () => dispatch(landscapeOrientation()),
  }
}

function mapStateToProps(state) {
  return {
    orientation: state.orientation
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
