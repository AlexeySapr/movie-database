import axios from 'axios';

// Ключ API (v3 auth)
// 93fd20970d74d9a3f9466d8d6c9e6297

// Ключ доступа к API (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2ZkMjA5NzBkNzRkOWEzZjk0NjZkOGQ2YzllNjI5NyIsInN1YiI6IjYxOTNhYjExNDJmMTlmMDA0MzFlZTkzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z6zVAqAKYmCRhBa4xmofDsVBFw9-x8O5I_GnOqiw-F8

const AUTH_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2ZkMjA5NzBkNzRkOWEzZjk0NjZkOGQ2YzllNjI5NyIsInN1YiI6IjYxOTNhYjExNDJmMTlmMDA0MzFlZTkzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z6zVAqAKYmCRhBa4xmofDsVBFw9-x8O5I_GnOqiw-F8';
axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_KEY}`;

export default {
  async getMovies() {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/trending/movie/week');
      // console.log('response: ', response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  async getGenres() {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list');
      // console.log('response: ', response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  incrementPage() {
    this.config.params.page += 1;
  },

  resetPage() {
    this.config.params.page = 1;
  },
};
