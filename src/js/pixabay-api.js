export const fetchPhotosByQuery = searchedQuery => {
  return fetch(
    `https://pixabay.com/api/?key=44900327-ed76a6d24ccf74b976808d529&q=${searchedQuery}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
