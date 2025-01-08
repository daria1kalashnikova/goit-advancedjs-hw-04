import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import { createGalleryCardsTemplate } from './js/render-functions';
import { fetchPhotosByQuery } from './js/pixabay-api';

const formEl = document.querySelector('.js-search-form');
const galleryElement = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');
const loadMoreBtn = document.querySelector('.js-load-more-btn');
let bigImage = new SimpleLightbox('.js-gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let page = 1;
let inputValue = '';

const onFormSubmit = async event => {
  try {
    event.preventDefault();

    inputValue = event.currentTarget.elements.user_query.value.trim();
    if (inputValue === '') {
      iziToast.warning({
        message: 'The input must be filled in!',
        position: 'topRight',
      });
      return;
    }

    galleryElement.innerHTML = '';

    page = 1;
    loadMoreBtn.classList.add('is-hidden');
    const response = await fetchPhotosByQuery(inputValue, page);

    if (response.data.total === 0) {
      iziToast.warning({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });

      galleryElement.innerHTML = '';
      formEl.reset();
      return;
    }

    galleryElement.innerHTML = createGalleryCardsTemplate(response.data.hits);
    bigImage.refresh();

    if (response.data.hits.length < 15) {
      loadMoreBtn.classList.add('is-hidden');
      loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);
      return;
    }

    loadMoreBtn.classList.remove('is-hidden');
    loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
  } catch (err) {
    console.log(err);
  } finally {
    loaderEl.classList.add('is-hidden');
  }
};

formEl.addEventListener('submit', onFormSubmit);

const onLoadMoreBtnClick = async event => {
  try {
    page++;

    const response = await fetchPhotosByQuery(inputValue, page);

    if (response.data.hits.length === 0) {
      loadMoreBtn.classList.add('is-hidden');
      loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);

      iziToast.warning({
        message: 'We`re sorry, but you`ve reached the end of search results.',
        position: 'topRight',
      });

      return;
    }

    galleryElement.insertAdjacentHTML(
      'beforeend',
      createGalleryCardsTemplate(response.data.hits)
    );
    bigImage.refresh();
  } catch (err) {
    console.log(err);
  }
};
