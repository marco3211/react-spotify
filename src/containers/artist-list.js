import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ArtistList extends Component {
  constructor(props) {
    super(props);

    this.renderArtist = this.renderArtist.bind(this);
  }

  renderArtist(data = '') {
    const res = data[1];
    const name = res.name;
    const id = res.id;
    const img = (res.images).length > 1 ? res.images[1].url : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';

    return (
      <div key={id}>
        <img src={img} width={200} />
        <div>{name}</div>
        <Link to={{ pathname: `artist/${name}/${id}` }}>View Artist</Link>
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