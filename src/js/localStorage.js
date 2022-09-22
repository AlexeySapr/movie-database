import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import * as FireStore from './firebase/fireStoreService';

let movieObj = {};

function setMovieObj({
  id,
  poster_path,
  title,
  vote_average,
  vote_count,
  popularity,
  original_title,
  genres,
  release_date,
  overview,
}) {
  movieObj = {
    id,
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    release_date,
    overview,
  };
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

function isInStorage(movieId, keyItem) {
  return getLocalStorageMovies(keyItem).some(id => {
    return id === movieId;
  });
}

/******************add remove***************** */
function removeFromLocalStorage(movieId, key) {
  const newMoviesArr = getLocalStorageMovies(key).filter(id => id != movieId);
  localStorage.setItem(key, JSON.stringify(newMoviesArr));
}

function addToLocalStorage(movieId, key) {
  const moviesArr = getLocalStorageMovies(key);
  moviesArr.push(movieId);
  localStorage.setItem(key, JSON.stringify(moviesArr));
}
/*********************************** */

function addMovie(movieObj, key) {
  FireStore.addMovie(movieObj, key)
    .then(res => {
      if (res === 'ok') {
        Notify.success('Movie added');
        addToLocalStorage(movieObj.id, key);
      }
    })
    .catch(() => {
      Notify.failure('Something wrong!');
    });
}

function removeMovie(movieObj, key) {
  console.log('movieObj: ', movieObj.title);

  FireStore.removeMovie(movieObj.title, key)
    .then(res => {
      if (res === 'ok') {
        Notify.success('Movie deleted');
        removeFromLocalStorage(movieObj.id, key);
      }
    })
    .catch(() => {
      Notify.failure('Something wrong!');
    });
}

/******************listener********************* */
function addRemoveWatched(event) {
  const refWatchBtn = document.querySelector('.modal__watch-list');
  const key = 'watchedMovies';

  //если фильм есть - удаляем
  if (isInStorage(movieObj.id, key)) {
    refWatchBtn.classList.remove('inStorage');
    refWatchBtn.textContent = 'ADD TO WATCHED';
    removeMovie(movieObj, key);
    // removeFromLocalStorage(movieObj.id, key);
    return;
  }

  //иначе добавляем в локал
  Loading.standard();
  refWatchBtn.classList.add('inStorage');
  refWatchBtn.textContent = 'REMOVE WATCHED';
  addMovie(movieObj, key);
  Loading.remove();
}

function addRemoveQueue(event) {
  const refQueueBtn = document.querySelector('.modal__queue-list');
  const key = 'queueMovies';

  //если фильм есть - удаляем
  if (isInStorage(movieObj.id, key)) {
    refQueueBtn.classList.remove('inStorage');
    refQueueBtn.textContent = 'ADD TO QUEUE';
    removeMovie(movieObj, key);
    // removeFromLocalStorage(movieObj.id, key);
    return;
  }

  //иначе добавляем в локал
  Loading.standard();
  refQueueBtn.classList.add('inStorage');
  refQueueBtn.textContent = 'REMOVE QUEUE';
  addMovie(movieObj, key);
  Loading.remove();
}

export { setMovieObj, addRemoveWatched, addRemoveQueue, getLocalStorageMovies, isInStorage };
