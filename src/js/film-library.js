import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { pagination } from './pagination.js';

import { refs } from '../js/refs.js';
import { showMoviesCards } from './modal-film-card.js';
import { scrollToTop } from './up-btn.js';

import { getLocalStorageMovies } from './localStorage.js';

const currentPage = {
  watched: true,
  queue: false,
};

//Вешаем слушатели на кнопки при загрузке страницы библиотеки
window.addEventListener('load', onWatchedBtnClick);
refs.watchedBtn.addEventListener('click', onWatchedBtnClick);
refs.queueBtn.addEventListener('click', onQueueBtnClick);

//Колбек при нажатии на кнопку "Watched"
function onWatchedBtnClick() {
  refs.watchedBtn.classList.add('filter__btn--current');
  refs.queueBtn.classList.remove('filter__btn--current');

  currentPage.watched = true;
  currentPage.queue = false;

  const storageKey = 'watchedMovies';
  const message = 'Your watched list is empty. Add any movie.';

  renderGallery(storageKey, message);
}

//Колбек при нажатии на кнопку "Queue"
function onQueueBtnClick() {
  refs.queueBtn.classList.add('filter__btn--current');
  refs.watchedBtn.classList.remove('filter__btn--current');

  currentPage.watched = false;
  currentPage.queue = true;

  const storageKey = 'queueMovies';
  const message = 'Your queue list is empty. Add any movie.';

  renderGallery(storageKey, message);
}

//Функция рендера галереи
function renderGallery(storageKey, message) {
  Loading.standard();
  const moviesArr = getLocalStorageMovies(storageKey);

  if (!moviesArr.length) {
    Notify.failure(message);
    refs.galleryList.innerHTML = '';
    refs.emptyLibrary.classList.remove('hidden');
    pagination.reset(0);
    Loading.remove();
    return;
  }

  pagination.reset(moviesArr.length);
  moviesArr.splice(20);
  refs.emptyLibrary.classList.add('hidden');
  showMoviesCards(moviesArr);
  Loading.remove();
}

//функция пагинации
pagination.on('afterMove', showNewPage);

function showNewPage(event) {
  let moviesArr;

  if (currentPage.watched) {
    moviesArr = getLocalStorageMovies(`watchedMovies`);
  } else if (currentPage.queue) {
    moviesArr = getLocalStorageMovies(`queueMovies`);
  }

  const page = event.page;
  if (page === 1) {
    moviesArr.splice(20);
    showMoviesCards(moviesArr);
  } else {
    const startPageItem = page * 20 - 20;
    const endPageItem = startPageItem + 20;
    const pageToShow = moviesArr.slice(startPageItem, endPageItem);
    showMoviesCards(pageToShow);
  }
  scrollToTop();
}
