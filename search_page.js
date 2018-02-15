'use strict';

import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';
import SearchResults from './search_results';

function urlForQueryAndPage(key, value, pageNumber) {
  const data = {};
  data[key] = value;

  const querystring = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&');

  return `https://pixabay.com/api/?key=8043644-df349845d6f87762499318ed7&` + querystring;
}

export default class SearchPage extends React.Component{
  constructor(props) {
    super(props);
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.search = this.search.bind(this);
  }

  handleSearchTextChange(event) {
    this.props.updateSearchString(event.nativeEvent.text);
  };

  search(query) {
    this.props.updateIsLoading(true);
    fetch(query)
      .then((response) => response.json())
      .then((json) => json.hits)
      .then(json => this.handleResponse(json))
      .catch(error => this.props.updateIsLoading(false));
  };

  handleResponse(response) {
    let numResults = response.length
    this.props.updateIsLoading(false)
    this.props.navigator.push({
      title: 'Results',
      component: SearchResults,
      passProps: {hits: response}
    });
  };

  handleSearchButton() {
    const query = urlForQueryAndPage('q', this.props.searchString, 1);
    this.search(query);
  };

  render() {
    const spinner = this.props.isLoading ? <ActivityIndicator size='large'/> : null;
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search for your favorite images!
        </Text>
        <Text style={styles.description}>
          Search by image name.
        </Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            value={this.props.searchString}
            onChange={this.handleSearchTextChange}
            placeholder='Search via name'/>
          <Button
            onPress={this.handleSearchButton}
            color='#48BBEC'
            title='Search'
          />
        </View>
        {spinner}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
  },
});
