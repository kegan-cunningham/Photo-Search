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
import ImageDetails from './ImageDetails';

export default class SearchResults extends React.Component {
  keyExtractor = (item) => item.id.toString();

  constructor(props) {
    super(props);
    this.selectItem = this.selectItem.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  selectItem (item) {
    this.props.navigator.push({
      title: 'Image',
      component: ImageDetails,
      passProps: {image: item}
    });
  }

  renderItem({item}) {
    return (
      <TouchableHighlight onPress={() => this.selectItem(item)}>
        <Image style={styles.image} source={{ url: item.webformatURL }} />
      </TouchableHighlight>
    );

  };

  render() {
    return (
      <FlatList
        contentContainerStyle={styles.flowRight}
        data={this.props.hits}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '48%',
    margin: '0.5%',
    aspectRatio: 1,
    height: 185,
    borderRadius: 20,
  },
  flowRight: {
    flex: 0.5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
