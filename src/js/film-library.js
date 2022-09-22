import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { pagination } from './pagination.js';

import { refs } from '../js/refs.js';
import { showMoviesCards, showLibraryPage } from './modal-film-card.js';
import { scrollToTop } from './up-btn.js';

import * as FireStore from './firebase/fireStoreService';

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

//temp movies obj
let watchedMoviesArr = [];
let queueMoviesArr = [];

//Функция рендера галереи
function renderGallery(storageKey, message) {
  Loading.standard();
  FireStore.getMovies(storageKey)
    .then(moviesArr => {
      if (!moviesArr.length) {
        Notify.failure(message);
        refs.galleryList.innerHTML = '';
        refs.emptyLibrary.classList.remove('hidden');
        pagination.reset(0);
        Loading.remove();
        return;
      }

      //save movies to temp obj
      storageKey === 'watchedMovies'
        ? (watchedMoviesArr = [...moviesArr])
        : (queueMoviesArr = [...moviesArr]);

      pagination.reset(moviesArr.length);
      moviesArr.splice(18);
      refs.emptyLibrary.classList.add('hidden');
      showMoviesCards(moviesArr);
      Loading.remove();
    })
    .catch(err => {
      console.log('some err: ', err);
    });
}

//функция пагинации
pagination.on('afterMove', showNewPage);

function showNewPage(event) {
  let moviesArr;

  if (currentPage.watched) {
    moviesArr = watchedMoviesArr;
  } else if (currentPage.queue) {
    moviesArr = queueMoviesArr;
  }

  const page = event.page;

  showLibraryPage(moviesArr, page);
  scrollToTop();
}
