'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
} from 'react-native';

export default class SearchResults extends Component<{}> {
  keyExtractor = (item, index) => item.id.toString();

  renderItem({item}) {
    return (
      <TouchableHighlight onPress={() => selectItem(item)}>
        <Image style={styles.imageSize} source={{ url: item.webformatURL }} />
      </TouchableHighlight>
    );

  };

  render() {
    return (
      <FlatList
        data={this.props.hits}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  imageSize: {
    width: 200,
    height: 200,
  },
});
