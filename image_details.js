import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

export default class ImageDetails extends React.Component {
  render() {
      const tagsWithHash = this.props.image.tags.split(' ').map(tag => `#${tag}`).join(' ').replace('/,/gi', '');
      return (
        <ScrollView>
          <Image style={styles.imageSize} source={{ url: this.props.image.webformatURL }} />
          <View style={styles.imageInfo}>
            <Text style={styles.text}>{this.props.image.likes} likes</Text>
            <Text style={styles.text}>Tags: {tagsWithHash}</Text>
            <Text style={styles.text}>Posted by {this.props.image.user}</Text>
            <Text style={styles.text}>{this.props.image.tagsWithHash}</Text>
            <Text style={styles.text}>{this.props.image.views} views</Text>
            <Text style={styles.text}>{this.props.image.downloads} downloads</Text>
            <Text style={styles.text}>{this.props.image.favorites} favorites</Text>
            <Text style={styles.text}>{this.props.image.comments} comments</Text>
            <Text style={styles.text}>Resolution: {`${this.props.image.webformatWidth} x ${this.props.image.webformatHeight}`}</Text>
          </View>
        </ScrollView>
      );
  }
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    paddingBottom: 5,
    fontFamily: 'Helvetica Neue',
    paddingLeft: 20,
    fontWeight: 'bold',
    color: '#214068',
  },
  imageSize: {
    width: '100%',
    height: 320,
  },
  imageInfo: {
  },
});
