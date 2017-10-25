import axios from 'axios';

const TOKEN = 'BQBjIWcneo9HvZCpg9x_tr11zmCkfjL4lkuvLpxWDROo2d2gwRWhdJTsefwm9f7VEskbzR7_u1fC6qNKa4E5dDkfVoeDsU6qzsp1MwVLDUPoaS0hGYJyrLSlnPVv3XrO3iv1dBEShg7Dpxcbm3hGIvwxxpZqJEwISD4';
const ROOT_URL = 'https://api.spotify.com/v1/search';

const config = { headers: { Authorization: `Bearer ${TOKEN}` }};

export const FETCH_ARTIST = 'FETCH_ARTIST';

export function fetchArtist(artist) {
  const request = axios.get(`https://api.spotify.com/v1/search?q=${artist}&type=artist`, config);

  return {
    type: FETCH_ARTIST,
    payload: request  
  };
}

