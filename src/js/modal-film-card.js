import { Loading } from 'notiflix/build/notiflix-loading-aio';
import filmCard from '../templates/modal-film-card-template.hbs';
import libCard from '../templates/library-film-card-template.hbs';
import { refs } from './refs.js';
import SearchAPI from './apiService.js';
import { pagination } from './pagination.js';
import * as FireStore from './firebase/fireStoreService';

import { setMovieObj, addRemoveWatched, addRemoveQueue, isInStorage } from './localStorage.js';

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
    refs.modalCard.innerHTML = filmCard(filmInfo);
    setMovieObj(filmInfo);

    const refWatchBtn = document.querySelector('.modal__watch-list');
    const refQueueBtn = document.querySelector('.modal__queue-list');

    /* Hide buttons when user isn`t loged in*/
    const currentUser = JSON.parse(localStorage.getItem('user'));

    if (!currentUser) {
      refWatchBtn.classList.add('hidden');
      refQueueBtn.classList.add('hidden');
    } else {
      refWatchBtn.classList.remove('hidden');
      refQueueBtn.classList.remove('hidden');
    }

    /*************************************************/

    if (isInStorage(filmInfo.id, 'watchedMovies')) {
      refWatchBtn.classList.add('inStorage');
      refWatchBtn.textContent = 'REMOVE WATCHED';
    }
    if (isInStorage(filmInfo.id, 'queueMovies')) {
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
      FireStore.getMovies('watchedMovies')
        .then(moviesArr => {
          const page = pagination.getCurrentPage();
          showLibraryPage(moviesArr, page);
        })
        .catch(err => {
          console.log('some err: ', err);
        });
    } else {
      FireStore.getMovies('queueMovies')
        .then(moviesArr => {
          const page = pagination.getCurrentPage();
          showLibraryPage(moviesArr, page);
        })
        .catch(err => {
          console.log('some err: ', err);
        });
    }
  }

  document.querySelector('.modal__watch-list').removeEventListener('click', addRemoveWatched);
  document.querySelector('.modal__queue-list').removeEventListener('click', addRemoveQueue);
}

function showLibraryPage(moviesArr, page) {
  if (page === 1) {
    moviesArr.splice(18);
    showMoviesCards(moviesArr);
  } else {
    const startPageItem = page * 18 - 18;
    const endPageItem = startPageItem + 18;
    const pageToShow = moviesArr.slice(startPageItem, endPageItem);
    showMoviesCards(pageToShow);
  }
}

function showMoviesCards(movies) {
  //форматируем жанры
  movies.forEach(movie => {
    const genresArr = movie.genres.split(', ');
    if (genresArr.length > 2) {
      genresArr.splice(2, genresArr.length, 'Other');
    }

    movie.genres = genresArr.join(', ');
  });

  //рендерим карточки фильмов
  refs.galleryList.innerHTML = libCard(movies);

  //вешаем слушатели на каждую карточку
  const cards = document.querySelectorAll('.film-list__item');
  cards.forEach(card => {
    card.addEventListener('click', openModalCard);
  });

  //если нет ни одного фильма, покзываем заглушку
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

export { openModalCard, showMoviesCards, showLibraryPage };
