'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
  Dimensions,
} from 'react-native';
import ImageDetails from './image_details';

export default class SearchResults extends React.Component {
  keyExtractor = (item) => item.id.toString();

  constructor(props) {
    super(props);
    this.selectItem = this.selectItem.bind(this);
    this.renderItem = this.renderItem.bind(this);
    const dim = Dimensions.get('screen');
    const orientation = dim.width > dim.height ? 'landscape' : 'portrait';
    this.state = {
      orientation: orientation
    }
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
    const dim = Dimensions.get('screen');
    const orientation = dim.width > dim.height ? 'landscape' : 'portrait';
    if(this.state.orientation != orientation) {
      this.setState({orientation: orientation})
    }
    return (
      <FlatList
        contentContainerStyle={styles.list}
        data={this.props.hits}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        numColumns={this.state.orientation == 'portrait' ? 2 : 3}
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    margin: 10,
    aspectRatio: 1,
    height: 185,
    borderRadius: 20,
  },
  list: {
    marginRight: 'auto',
    marginLeft: 'auto',
  },
});
