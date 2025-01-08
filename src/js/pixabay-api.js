import axios from 'axios';

export const fetchPhotosByQuery = (searchedQuery, page) => {
  const requestParams = {
    key: '44900327-ed76a6d24ccf74b976808d529',
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: page,
  };
  return axios.get(`https://pixabay.com/api/`, { params: requestParams });
};
