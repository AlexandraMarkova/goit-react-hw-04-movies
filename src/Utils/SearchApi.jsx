import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '20350102-ed832d5aeaea3e1e1304ff4e5';

export const fetchImages = ({ searchQuery = '', page = 1, perPage = 12 }) => {
  return axios
    .get(
      `?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
    )
    .then(response => response.data);
};
