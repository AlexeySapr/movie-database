import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import { refs } from './refs.js';

const movieObj = {};

function setMovieObj({
  id,
  poster_path,
  title,
  vote_average,
  vote_count,
  popularity,
  original_title,
  genres,
  overview,
}) {
  movieObj.id = id;
  movieObj.poster_path = `https://image.tmdb.org/t/p/w500${poster_path}`;
  movieObj.title = title;
  movieObj.vote_average = vote_average;
  movieObj.vote_count = vote_count;
  movieObj.popularity = popularity;
  movieObj.original_title = original_title;
  movieObj.genres = genres;
  movieObj.overview = overview;
}

function getLocalStorageMovies(keyItem) {
  if (keyItem === 'watchedMovies') {
    const res = JSON.parse(localStorage.getItem('watchedMovies'));
    return res ? res : [];
  } else if (keyItem === 'queueMovies') {
    const res = JSON.parse(localStorage.getItem('queueMovies'));
    return res ? res : [];
  }
}

function isInStorage(movieObj, keyItem) {
  return getLocalStorageMovies(keyItem).some(movie => {
    return movie.id === movieObj.id;
  });
}

/******************add remove***************** */
function removeFromWatchedLocalStorage(movieObj) {
  const newMoviesArr = getLocalStorageMovies('watchedMovies').filter(
    movie => movie.id != movieObj.id,
  );
  localStorage.setItem('watchedMovies', JSON.stringify(newMoviesArr));
}

function addToWatchedLocalStorage(movieObj) {
  const watchedMoviesArr = getLocalStorageMovies('watchedMovies');
  watchedMoviesArr.push(movieObj);
  localStorage.setItem('watchedMovies', JSON.stringify(watchedMoviesArr));
}
/*********************************** */

/******************listener********************* */
function addRemoveWatched(event) {
  const refWatchBtn = document.querySelector('.modal__watch-list');

  //если фильм есть - удаляем
  if (isInStorage(movieObj, 'watchedMovies')) {
    console.log('InStorage');
    refWatchBtn.classList.remove('inStorage');
    refWatchBtn.textContent = 'ADD TO WATCHED';
    removeFromWatchedLocalStorage(movieObj);
    return;
  }

  //иначе добавляем в локал
  console.log('need to add to storage');
  refWatchBtn.classList.add('inStorage');
  refWatchBtn.textContent = 'REMOVE WATCHED';
  addToWatchedLocalStorage(movieObj);
}

export { setMovieObj, addRemoveWatched, getLocalStorageMovies, isInStorage };
