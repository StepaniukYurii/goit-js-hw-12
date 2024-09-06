import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  fetchImages,
  incrementPage,
  resetPage,
  perPage,
} from './js/pixabay-api.js';
import {
  renderGalleryItems,
  scrollByTwoCardHeights,
} from './js/render-functions.js';

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-query');
const gallery = document.querySelector('#gallery');
const loader = document.querySelector('.loader');
const loadBtn = document.querySelector('.load-btn');

let lightbox;

searchForm.addEventListener('submit', async event => {
  event.preventDefault();

  gallery.innerHTML = '';
  loader.style.display = 'block';
  loadBtn.style.display = 'none';
  loader.classList.add('submit-loader');

  const query = searchInput.value.trim();

  resetPage();

  try {
    const data = await fetchImages(query);

    if (data.hits.length === 0) {
      iziToast.show({
        message:
          'Sorry, there are no images matching <br> your search query. Please try again!',
        messageColor: '#fafafb',
        messageLineHeight: '1.5px',
        messageSize: '16px',
        backgroundColor: '#ef4040',
        position: 'topRight',
      });
    } else {
      renderGalleryItems(data, gallery, lightbox);
      loadBtn.style.display = data.hits.length === perPage ? 'block' : 'none';
    }
  } catch (error) {
    console.log(error);
  } finally {
    loader.classList.remove('submit-loader');
    loader.style.display = 'none';
  }
});

loadBtn.addEventListener('click', async () => {
  loader.classList.add('load-btn-loader');
  loader.style.display = 'block';
  loadBtn.style.display = 'none';
  const query = searchInput.value.trim();
  incrementPage();

  try {
    const data = await fetchImages(query);
    renderGalleryItems(data, gallery, lightbox);
    if (data.hits.length < perPage) {
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        messageColor: '#fafafb',
        messageLineHeight: '1.5px',
        messageSize: '16px',
        backgroundColor: '#ef4040',
        position: 'topRight',
      });
      loadBtn.style.display = 'none';
      loader.style.display = 'none';
      return;
    }
    loader.classList.remove('load-btn-loader');
    loader.style.display = 'none';
    loadBtn.style.display = 'block';

    scrollByTwoCardHeights();
  } catch (error) {
    console.log(error);
  }
});
