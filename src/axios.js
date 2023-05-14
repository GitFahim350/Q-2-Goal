// axios.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '0ab6a747de17a012374472631929e7e5',
  },
});

export default instance;
