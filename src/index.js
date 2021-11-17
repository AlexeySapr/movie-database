import './sass/main.scss';

import card from './template/card.hbs';
import apiService from './js/api-service';
import throttle from 'lodash.throttle';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'lazysizes';

let simpleGallery = new SimpleLightbox('.list-item a');

const galleryList = document.querySelector('.list');
const searchForm = document.querySelector('.search-form');
// const loadMoreBtn = document.querySelector('.load-more');

searchForm.addEventListener('submit', onSubmit);
// loadMoreBtn.addEventListener('click', onLoadMore);

// function onLoadMore(event) {
//   event.preventDefault();
//   apiService.incrementPage();
//   showFotos();
//   simpleGallery.refresh();
// }

function onSubmit(event) {
  event.preventDefault();

  galleryList.innerHTML = '';
  apiService.resetPage();
  apiService.config.params.query = event.currentTarget.elements.text.value;
  showFotos();

  searchForm.reset();
  checkScroll();
}

async function showFotos() {
  try {
    const photos = await apiService.getFotos();
    galleryList.insertAdjacentHTML('beforeend', card(photos));
    simpleGallery.refresh();
  } catch (error) {
    console.error(error);
  }
}

function checkScroll() {
  window.addEventListener('scroll', throttle(checkPosition, 500));
  window.addEventListener('resize', throttle(checkPosition, 500));
}

function checkPosition() {
  // Нам потребуется знать высоту документа и высоту экрана.
  const height = document.body.offsetHeight;
  const screenHeight = window.innerHeight;

  // Они могут отличаться: если на странице много контента,
  // высота документа будет больше высоты экрана (отсюда и скролл).

  // Записываем, сколько пикселей пользователь уже проскроллил.
  const scrolled = window.scrollY;

  // Обозначим порог, по приближении к которому
  // будем вызывать какое-то действие.
  // В нашем случае — четверть экрана до конца страницы.
  const threshold = height - screenHeight / 4;

  // Отслеживаем, где находится низ экрана относительно страницы.
  const position = scrolled + screenHeight;

  if (position >= threshold) {
    // Если мы пересекли полосу-порог, вызываем нужное действие.
    apiService.incrementPage();
    showFotos();
  }
}
