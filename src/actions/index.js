import axios from 'axios';

const CLIENT_ID = 'BQCfWeCTmPM2IF4TugVmaMzWJvDLJR3S9RM8d-9nlJEKNyxLY-yWkVV9kkf7ZoFp03uQcFQxis4xA7Tq_-Dszk3fQT3SaGP3r8ZmOKfPXFiQ7exr-sWc2UC88Za-AIrkpaLYYrWCW_qzfuwvyVk0IL9tZfug2pOWFnw';
const ROOT_URL = 'https://api.spotify.com/v1/search';

const config = { headers: { Authorization: `Bearer ${CLIENT_ID}` }};

export const FETCH_ARTIST = 'FETCH_ARTIST';

export function fetchArtist(artist) {
  const request = axios.get(`https://api.spotify.com/v1/search?q=${artist}&type=artist`, config);

  return {
    type: FETCH_ARTIST,
    payload: request  
  };
}

