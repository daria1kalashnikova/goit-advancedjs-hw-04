import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import { createGalleryCardsTemplate } from './js/render-functions';
import { fetchPhotosByQuery } from './js/pixabay-api';

const formEl = document.querySelector('.js-search-form');
const galleryElement = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');
let bigImage = new SimpleLightbox('.js-gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const onFormSubmit = event => {
  event.preventDefault();
  const inputValue = event.currentTarget.elements.user_query.value.trim();
  if (inputValue === '') {
    iziToast.warning({
      message: 'The input must be filled in!',
      position: 'topRight',
    });
    return;
  }
  galleryElement.innerHTML = '';
  loaderEl.classList.remove('is-hidden');

  fetchPhotosByQuery(inputValue)
    .finally(() => {
      loaderEl.classList.add('is-hidden');
    })
    .then(data => {
      console.log(data);
      if (data.total === 0) {
        iziToast.warning({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });

        galleryElement.innerHTML = '';

        return;
      }
      galleryElement.innerHTML = createGalleryCardsTemplate(data.hits);
      bigImage.refresh();
    })
    .catch(err => {
      console.log(err);
    });
};

formEl.addEventListener('submit', onFormSubmit);
