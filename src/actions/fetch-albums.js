import axios from 'axios';

const TOKEN = 'BQCNgdLINRIHnvnJJBbA7OHctAEIaNZ8Si6V_g8GvOR-HAMr9QSl7Dz_nQsFVkPbsUYs9-0ka7N0CjbaAxn2_Mf8QNjYPRiCubR0f-6Jah0WoAc6YVZhrg1thU63IKT0e_dpO9lagCNX3fBU-bp6PwfpwnIxwXj6pXE';
const ROOT_URL = 'https://api.spotify.com/v1/artists';

const config = { headers: { Authorization: `Bearer ${TOKEN}` }};

export const FETCH_ALBUMS = 'FETCH_ALBUMS';

export function fetchAlbums(id) {
  const request = axios.get(`${ROOT_URL}/${id}/albums`, config);

  return {
    type: FETCH_ALBUMS,
    payload: request  
  };
}

