import axios from 'axios';

const API_KEY = 'ba5dd7d9bd81b9a15ac463967b247cdf';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

const fetchPopularFilms = () => {
  return axios
    .get(`/trending/all/day?`)
    .then(({ data }) => data)
    .catch(error => {
      throw error;
    });
};

const fetchFilmsQuery = (query, page = 1) => {
  return axios
    .get(`/search/movie`, { params: { query, page, include_adult: false } })
    .then(({ data }) => data.results)
    .catch(error => {
      throw error;
    });
};

const fetchFilmsDetails = movieId => {
  return axios
    .get(`/movie/${movieId}`, {
      params: { append_to_response: 'reviews,credits' },
    })
    .then(response => response)
    .catch(error => {
      throw error;
    });
};

export { fetchPopularFilms, fetchFilmsQuery, fetchFilmsDetails };
