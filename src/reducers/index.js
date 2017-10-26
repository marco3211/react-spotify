import { combineReducers } from 'redux';

import ReducerArtist from './reducer-artist';
import ReducerAlbums from './reducer-albums';

const rootReducer = combineReducers({
  artist: ReducerArtist,
  albums: ReducerAlbums
});

export default rootReducer;
