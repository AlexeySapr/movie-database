import axios from 'axios';

const AUTH_KEY = '563492ad6f91700001000001926c4fbb77504078a21e31a37ce51bbd';
axios.defaults.headers.common['Authorization'] = AUTH_KEY;

export default {
  config: {
    params: {
      query: '',
      page: 1,
      per_page: 36,
    },
  },

  async getFotos() {
    try {
      const response = await axios.get('https://api.pexels.com/v1/search', this.config);
      return response.data.photos;
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
