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
import InfiniteScroll from 'react-native-infinite-scroll';

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
      images: this.props.images
    }
    this.images = this.props.images;
    this.pageNumber = this.props.pageNumber;
    this.handleResponse = this.handleResponse.bind(this);
    this.loadMorePages = this.loadMorePages.bind(this);
    this.fetchMoreData = this.fetchMoreData.bind(this);
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

  onLayout(e) {
    const dim = Dimensions.get('screen');
    const orientation = dim.width > dim.height ? 'landscape' : 'portrait';
    if(this.state.orientation != orientation) {
      this.setState({orientation: orientation})
    }
  }

  loadMorePages() {
    let query = this.fetchMoreData(this.pageNumber);
    this.props.updateIsLoading(true);
    fetch(query)
    .then((response) => response.json())
    .then((json) => json.hits)
    .then(json => this.handleResponse(json))
    .catch(error => {
      console.log(error);
    });
  }

  fetchMoreData(pageNumber) {
    const data = {};
    data['q'] = this.props.searchString;

    const querystring = Object.keys(data)
      .map(key => key + '=' + encodeURIComponent(data[key]))
      .join('&');

    return `https://pixabay.com/api/?key=8043644-df349845d6f87762499318ed7&page=` + ((pageNumber + 1).toString()) + `&per_page=10&` + querystring;
  }

  handleResponse(response) {
    let numResults = response.length
    // this.props.loadMoreImages(response);
    const newImages = this.state.images.concat(response)
    this.setState({images: newImages});
    this.props.updateIsLoading(false)
    this.pageNumber += 1;
  };

  render() {
    const dim = Dimensions.get('screen');
    const orientation = dim.width > dim.height ? 'landscape' : 'portrait';
    if(this.state.orientation != orientation) {
      this.setState({orientation: orientation})
    }
    return (
      <InfiniteScroll
        horizontal={false}
        onLoadMoreAsync={this.loadMorePages}
        distanceFromEnd={25}
        style={styles.scrollView}
      >
        <View onLayout={this.onLayout.bind(this)} key={this.pageNumber + 'View'}>
          <FlatList
            contentContainerStyle={styles.list}
            data={this.state.images}
            extraData = {this.state}
            keyExtractor={this.keyExtractor}
            key={(this.state.orientation == 'landscape' ? 'h' + this.pageNumber : 'v' + this.pageNumber)}
            renderItem={this.renderItem}
            numColumns={this.state.orientation == 'portrait' ? 2 : 3}
          />
        </View>
    </InfiniteScroll>

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
    marginTop: 10,
  },
});
