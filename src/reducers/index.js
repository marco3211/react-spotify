import { combineReducers } from 'redux';

import ReducerArtist from './reducer-artist';

const rootReducer = combineReducers({
  artist: ReducerArtist
});

export default rootReducer;
