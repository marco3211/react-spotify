import React, { Component } from 'react';
import { connect } from 'react-redux';

class ArtistList extends Component {
  constructor(props) {
    super(props);

    this.renderArtist = this.renderArtist.bind(this);
  }

  renderArtist(data = '') {
    let name = data[1].name;
    let id = data[1].id;

    return (
      <div key={id}>
        <div>{name}</div>
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.props.artist.map(this.renderArtist) }
      </div>
    );
  };
}

function mapStateToProps({ artist }) {
  return { artist: Object.entries(artist) };
}

export default connect(mapStateToProps)(ArtistList);