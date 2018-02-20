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
import ImageDetails from '../image_details/image_details.js';
import { CachedImage,ImageCacheProvider } from 'react-native-cached-image';

export default class SearchResults extends React.Component {
  keyExtractor = (item) => item.id.toString();

  constructor(props) {
    super(props);
    this.selectItem = this.selectItem.bind(this);
    this.renderItem = this.renderItem.bind(this);
    const dim = Dimensions.get('screen');
    const orientation = dim.width > dim.height ? 'landscape' : 'portrait';
    this.yOffset = 0;
    this.state = {
      orientation: orientation,
    }
    this.handleResponse = this.handleResponse.bind(this);
    this.loadMorePages = this.loadMorePages.bind(this);
    this.moreDataQuery = this.moreDataQuery.bind(this);
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
        <CachedImage style={styles.image} source={{ uri: item.webformatURL }} />
      </TouchableHighlight>
    );
  };

  onLayout(e) {
    const dim = Dimensions.get('screen');
    const orientation = dim.width > dim.height ? 'landscape' : 'portrait';
    if(this.state.orientation != orientation) {
      this.setState({orientation: orientation})
    }
  }

  loadMorePages() {
    let query = this.moreDataQuery(this.props.pageNumber);
    this.props.updateIsLoading(true);
    fetch(query)
    .then((response) => response.json())
    .then((json) => json.hits)
    .then(json => this.handleResponse(json))
    .catch(error => {
      console.log(error);
    });
  }

  moreDataQuery(pageNumber) {
    const data = {};
    data['q'] = this.props.searchString;

    const querystring = Object.keys(data)
      .map(key => key + '=' + encodeURIComponent(data[key]))
      .join('&');

    return `https://pixabay.com/api/?key=8043644-df349845d6f87762499318ed7&page=` + ((pageNumber + 1).toString()) + `&per_page=10&` + querystring;
  }

  handleResponse(response) {
    this.props.loadMoreImages(response);
    console.log(this.props.searchString);
    this.props.updateIsLoading(false)
  };

  render() {
    const dim = Dimensions.get('screen');
    const orientation = dim.width > dim.height ? 'landscape' : 'portrait';
    if(this.state.orientation != orientation) {
      this.setState({orientation: orientation})
    }
    return (
        <View onLayout={this.onLayout.bind(this)}>
          <FlatList
            onEndReached={this.loadMorePages}
            onEndReachedThreshold={1}
            contentContainerStyle={styles.list}
            data={this.props.images}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
            numColumns={this.state.orientation == 'portrait' ? 2 : 3}
          />
        </View>

    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 170,
    margin: 7,
    aspectRatio: 1,
    height: 165,
    borderRadius: 20,
  },
  list: {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 10,
  },
});
