import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchArtist } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { artist: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ artist: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchArtist(this.state.artist);
    this.setState({ artist: '' });
  }

  render() {
    return(
      <form onSubmit={this.onFormSubmit}>
        <input type="text" placeholder="Lookup Artist" value={this.state.artist} onChange={this.onInputChange} />
        <button type="submit">Search Artist</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchArtist }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);