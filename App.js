import React, { Component } from 'react';

import Header from './src/components/Header/';
import AlbumList from './src/components/AlbumList/';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header headerText={'Albums'} />
        <AlbumList />
      </React.Fragment>
    );
  }
}
