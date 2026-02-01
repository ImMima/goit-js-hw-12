import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const loadMore = document.querySelector('.load-more');
let lastQuery = '';
let page = 1;

form.addEventListener('submit', async evt => {
  evt.preventDefault();
  const input = form.querySelector("input[name='search-text']");
  const query = input.value.trim();
  if (!query) {
    return;
  }
  clearGallery();
  hideLoadMoreButton();
  showLoader();
  lastQuery = '';
  page = 1;

  try {
    const data = await getImagesByQuery(query, 1);
    const result = data.hits;

    hideLoader();
    lastQuery = query;

    if (!Array.isArray(result) || !result.length) {
      iziToast.error({
        title: `Sorry, there are no images matching your search query. Please try again!`,
        position: 'topRight',
        iconColor: '#fff',
        messageColor: '#fafafb',
        titleColor: '#FFFFFF',
        backgroundColor: '#EF4040',
        progressBarColor: '#B51B1B',
      });
      return;
    }
    createGallery(result);
    if (data.totalHits >= 15) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.info({
        title: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    hideLoader();
    iziToast.error({
      title: `Unknown error`,
      message: error.message,
      position: 'topRight',
      iconColor: '#fff',
      messageColor: '#fafafb',
      titleColor: '#FFFFFF',
      backgroundColor: '#EF4040',
      progressBarColor: '#B51B1B',
    });
  }
});

loadMore.addEventListener('click', async evt => {
  evt.preventDefault();
  showLoader();
  hideLoadMoreButton();
  page += 1;
  try {
    const data = await getImagesByQuery(lastQuery, page);
    const result = data.hits;
    hideLoader();
    if (!Array.isArray(result) || !result.length) {
      iziToast.info({
        title: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      return;
    }
    createGallery(result);
    const galleryCard = document.querySelector('.gallery-item');
    const cardHeight = galleryCard.getBoundingClientRect().height;
    window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });

    if (data.totalHits <= 15 * page) {
      iziToast.info({
        title: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      return;
    }
    showLoadMoreButton();
  } catch (error) {
    hideLoader();
    iziToast.error({
      title: `Unknown error`,
      message: error.message,
      position: 'topRight',
      iconColor: '#fff',
      messageColor: '#fafafb',
      titleColor: '#FFFFFF',
      backgroundColor: '#EF4040',
      progressBarColor: '#B51B1B',
    });
  }
});
