import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAlbums } from '../actions/fetch-albums';

class AlbumsList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(props) {
    this.props.fetchAlbums('6lB8vOoI4DRrrVxXwuV19c');
  }

  render(props) {
    return (
      <div>
        hello
      </div>
    );
  };
}

function mapStateToProps({ albums }, ownProps) {
  console.log(ownProps);
  return { albums }
}

export default connect(mapStateToProps, { fetchAlbums })(AlbumsList);