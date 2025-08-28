import axios from 'axios';

export const URL = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';
export const API_KEY ="81f677e4e73a9ed793007eab3a58ecb5";


export const options1 = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/authentication',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWY2NzdlNGU3M2E5ZWQ3OTMwMDdlYWIzYTU4ZWNiNSIsIm5iZiI6MTc1NjI0MDg4Ny45OTIsInN1YiI6IjY4YWUxYmY3YTQ4MTIyZWFiZDNkODZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kUepro5fGp1oicejH4DgSHlVTRXG-1zp1jAp5kHUPig'
  }
};

axios
  .request(options1)
  .then(res => console.log(res.data))
  .catch(err => console.error(err));