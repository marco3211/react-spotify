import React, { Component } from 'react';

import SearchBar from '../containers/search-bar';
import ArtistList from '../containers/artist-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ArtistList />
      </div>
    );
  }
}
