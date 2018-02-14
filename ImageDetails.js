import React from 'react';
import { Text, ScrollView, Image, StyleSheet } from 'react-native';

export default class ImageDetails extends React.Component{

  render() {
      const tagsWithHash = this.props.image.tags.split(', ').map(tag => `#${tag}`).join(' ');
      return (
        <ScrollView>
          <Image style={styles.imageSize} source={{ url: this.props.image.webformatURL }} />
          <Text style={styles.text}>{this.props.image.likes} likes</Text>
          <Text style={styles.text}>Posted by {this.props.image.user}</Text>
          <Text style={styles.text}>{this.props.image.tagsWithHash}</Text>
          <Text style={styles.text}>{this.props.image.views} views</Text>
          <Text style={styles.text}>{this.props.image.downloads} downloads</Text>
          <Text style={styles.text}>{this.props.image.favorites} favorites</Text>
          <Text style={styles.text}>{this.props.image.comments} comments</Text>
          <Text style={styles.text}>Resolution: {`${this.props.image.webformatWidth} x ${this.props.image.webformatHeight}`}</Text>
        </ScrollView>
      );
  }
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontFamily: 'Helvetica Neue',
    paddingLeft: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  imageSize: {
    width: '100%',
    height: 320,
  },
});
