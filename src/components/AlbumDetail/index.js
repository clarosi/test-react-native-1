import React from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';

import Card from '../Card/';
import CardSection from '../CardSection/';
import Button from '../Button/';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const {
    textContainer,
    textTitle,
    imageContainer,
    imageDimension,
    imageStyle
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={imageContainer}>
          <Image style={imageDimension} source={{ uri: thumbnail_image }} />
        </View>
        <View style={textContainer}>
          <Text style={textTitle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)} buttonText={'Buy now'} />
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  textTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageDimension: {
    width: 50,
    height: 50
  },
  imageStyle: {
    flex: 1,
    height: 300,
    width: null
  }
});

export default AlbumDetail;
