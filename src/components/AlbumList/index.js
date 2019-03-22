import React, { Component } from 'react';
import { ScrollView, Alert, ActivityIndicator } from 'react-native';

import axios from 'axios';
import AlbumDetail from '../AlbumDetail/';

class AlbumList extends Component {
  state = {
    albums: [],
    isLoading: false
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => {
        const albums = res.data.map((album, index) => {
          return {
            ...album,
            key: index.toString()
          };
        });
        this.setState({ isLoading: false });
        if (albums.length === 0) return;
        this.setState({ albums });
        console.log(albums);
      })
      .catch(err => {
        this.setState({ isLoading: false });
        Alert.alert('Error', err.message);
        console.log(err);
      });
  }

  renderAlbums = () => {
    return this.state.albums.map((album, index) => (
      <AlbumDetail key={index} album={album} />
    ));
  };

  render() {
    let albums = (
      <ActivityIndicator
        style={{ marginTop: 25 }}
        size={'large'}
        color={'#0000ff'}
      />
    );
    if (!this.state.isLoading) {
      albums = <ScrollView>{this.renderAlbums()}</ScrollView>;
      // albums = (
      //   <FlatList
      //     data={this.state.albums}
      //     renderItem={() => this.renderAlbums()}
      //   />
      // );
    }
    return albums;
  }
}

export default AlbumList;
