import axios from 'axios';

const TOKEN = 'BQAnA_ensWvh4tGue7326wAuSQ1UBrEFSQ54UvynJVRvh3ZEA-X0_GK_1Dx9oD25h6-phnijYiejclCDGtMzELKWOtMysZcF-DPiNcHjLkauMBVjML3CAEbyf4SavnAgMV9_IpBBCvNBcSpTGfqqky0aOTjGu8SIg1Y';
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

