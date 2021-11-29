import { refs } from './refs.js';
import SearchAPI from './apiService';
import modalCard from '../templates/modal-film-card-template.hbs';

import {
  setMovieObj,
  addRemoveWatched,
  getLocalStorageMovies,
  isInStorage,
} from './localStorage.js';

const apiService = new SearchAPI();

export function openModalCard(evt) {
  refs.modalCard.innerHTML = '';
  refs.modal.addEventListener('click', toClickOnOverlay);
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.toggle('modal-open');

  if (evt) {
    refs.modal.classList.remove('is-hidden');
  }
  const filmId = evt.currentTarget.dataset.idNumber;

  getFilmInfo(filmId);
}

async function getFilmInfo(filmId) {
  try {
    const filmInfo = await apiService.getMovieById(filmId);
    cardMarkup(filmInfo);
    setMovieObj(filmInfo);

    const refWatchBtn = document.querySelector('.modal__watch-list');
    // const refQueueBtn = document.querySelector('.modal__queue-list');

    if (isInStorage(filmInfo, 'watchedMovies')) {
      refWatchBtn.classList.add('inStorage');
      refWatchBtn.textContent = 'REMOVE FROM WATCHED';
    }
    refWatchBtn.addEventListener('click', addRemoveWatched);

    // if ('фильм в очереди') {
    //   ('закрасить кнопку');
    // } else {
    //  refQueueBtn.addEventListener('click', addQueue);
    // }
  } catch (error) {
    console.error(error);
  }
}

function cardMarkup(filmInfo) {
  refs.modalCard.innerHTML = modalCard(filmInfo);
}

function closeModalCard() {
  refs.modal.classList.add('is-hidden');
  refs.modal.removeEventListener('click', toClickOnOverlay);
  window.removeEventListener('keydown', onEscKeyPress);
  document.querySelector('.modal__watch-list').removeEventListener('click', addRemoveWatched);
  // document.querySelector('.modal__queue-list').removeEventListener('click', addQueue);
  document.body.classList.toggle('modal-open');
}

function onEscKeyPress(evt) {
  if (evt.code === 'Escape') {
    closeModalCard();
  }
}

function toClickOnOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closeModalCard();
  }
}

// function toClickButtonClose(evt) {
//   if (evt) {
//     closeModalCard();
//   }
// }
