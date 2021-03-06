import { Loading } from 'notiflix/build/notiflix-loading-aio';
import filmCard from '../templates/modal-film-card-template.hbs';
import libCard from '../templates/library-film-card-template.hbs';
import { refs } from './refs.js';
import SearchAPI from './apiService.js';
import { pagination } from './pagination.js';

import {
  setMovieObj,
  addRemoveWatched,
  addRemoveQueue,
  getLocalStorageMovies,
  isInStorage,
} from './localStorage.js';

const apiService = new SearchAPI();

function openModalCard(evt) {
  refs.modalCard.innerHTML = '';
  refs.modal.addEventListener('click', toClickOnOverlay);
  refs.buttonClose.addEventListener('click', toClickButtonClose);
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.toggle('modal-open');

  if (evt) {
    refs.modal.classList.remove('is-hidden');
  }
  const filmId = evt.currentTarget.dataset.idNumber;

  Loading.standard();
  getFilmInfo(filmId);
  Loading.remove();
}

async function getFilmInfo(filmId) {
  try {
    const filmInfo = await apiService.getMovieById(filmId);
    // console.log(filmInfo);
    refs.modalCard.innerHTML = filmCard(filmInfo);
    setMovieObj(filmInfo);

    const refWatchBtn = document.querySelector('.modal__watch-list');
    const refQueueBtn = document.querySelector('.modal__queue-list');

    if (isInStorage(filmInfo, 'watchedMovies')) {
      refWatchBtn.classList.add('inStorage');
      refWatchBtn.textContent = 'REMOVE WATCHED';
    }
    if (isInStorage(filmInfo, 'queueMovies')) {
      refQueueBtn.classList.add('inStorage');
      refQueueBtn.textContent = 'REMOVE QUEUE';
    }
    refWatchBtn.addEventListener('click', addRemoveWatched);
    refQueueBtn.addEventListener('click', addRemoveQueue);
  } catch (error) {
    console.error(error);
  }
}

function closeModalCard() {
  refs.modal.classList.add('is-hidden');
  refs.modal.removeEventListener('click', toClickOnOverlay);
  refs.buttonClose.removeEventListener('click', closeModalCard);

  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.toggle('modal-open');

  if (window.location.pathname === '/library.html') {
    const isInWatched = refs.watchedBtn.classList.contains('filter__btn--current');
    if (isInWatched) {
      const moviesArr = getLocalStorageMovies('watchedMovies');
      const page = pagination.getCurrentPage();
      showLibraryPage(moviesArr, page);
    } else {
      const moviesArr = getLocalStorageMovies('queueMovies');
      const page = pagination.getCurrentPage();
      showLibraryPage(moviesArr, page);
    }
  }
  document.querySelector('.modal__watch-list').removeEventListener('click', addRemoveWatched);
  document.querySelector('.modal__queue-list').removeEventListener('click', addRemoveQueue);
}

function showLibraryPage(moviesArr, page) {
  if (page === 1) {
    moviesArr.splice(20);
    showMoviesCards(moviesArr);
  } else {
    const startPageItem = page * 20 - 20;
    const endPageItem = startPageItem + 20;
    const pageToShow = moviesArr.slice(startPageItem, endPageItem);
    showMoviesCards(pageToShow);
  }
}

function showMoviesCards(movies) {
  //?????????????????????? ??????????
  movies.forEach(movie => {
    const genresArr = movie.genres.split(', ');
    if (genresArr.length > 2) {
      genresArr.splice(2, genresArr.length, 'Other');
    }

    movie.genres = genresArr.join(', ');
  });

  //???????????????? ???????????????? ??????????????
  refs.galleryList.innerHTML = libCard(movies);

  //???????????? ?????????????????? ???? ???????????? ????????????????
  const cards = document.querySelectorAll('.film-list__item');
  cards.forEach(card => {
    card.addEventListener('click', openModalCard);
  });

  //???????? ?????? ???? ???????????? ????????????, ?????????????????? ????????????????
  if (movies.length === 0) {
    refs.emptyLibrary.classList.remove('hidden');
  }
}

function toClickButtonClose(evt) {
  if (evt) {
    closeModalCard();
  }
}

function toClickOnOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closeModalCard();
  }
}

function onEscKeyPress(evt) {
  if (evt.code === 'Escape') {
    closeModalCard();
  }
}

export { openModalCard, showMoviesCards };
