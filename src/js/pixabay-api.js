import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';

export const getImagesByQuery = async (query, page = 1) => {
  const key = '54455311-030751af506b74e799c74bea1';
  const response = await axios.get(BASE_URL, {
    params: {
      key: key,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: page,
      per_page: 15,
    },
  });
  return response.data;
};
