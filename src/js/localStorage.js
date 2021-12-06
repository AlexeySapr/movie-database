import emtyFilmCard from '../images/emty-film.jpg';

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
  release_date,
  overview,
}) {
  movieObj.id = id;
  movieObj.poster_path = poster_path;
  movieObj.title = title;
  movieObj.vote_average = vote_average;
  movieObj.vote_count = vote_count;
  movieObj.popularity = popularity;
  movieObj.original_title = original_title;
  movieObj.genres = genres;
  movieObj.release_date = release_date;
  movieObj.overview = overview;
  movieObj.own_poster_path = emtyFilmCard;
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
function removeFromLocalStorage(movieObj, key) {
  const newMoviesArr = getLocalStorageMovies(key).filter(movie => movie.id != movieObj.id);
  localStorage.setItem(key, JSON.stringify(newMoviesArr));
}

function addToLocalStorage(movieObj, key) {
  const watchedMoviesArr = getLocalStorageMovies(key);
  watchedMoviesArr.push(movieObj);
  localStorage.setItem(key, JSON.stringify(watchedMoviesArr));
}
/*********************************** */

/******************listener********************* */
function addRemoveWatched(event) {
  const refWatchBtn = document.querySelector('.modal__watch-list');
  const key = 'watchedMovies';

  //если фильм есть - удаляем
  if (isInStorage(movieObj, key)) {
    refWatchBtn.classList.remove('inStorage');
    refWatchBtn.textContent = 'ADD TO WATCHED';
    removeFromLocalStorage(movieObj, key);
    return;
  }

  //иначе добавляем в локал
  refWatchBtn.classList.add('inStorage');
  refWatchBtn.textContent = 'REMOVE WATCHED';
  addToLocalStorage(movieObj, key);
}

function addRemoveQueue(event) {
  const refQueueBtn = document.querySelector('.modal__queue-list');
  const key = 'queueMovies';

  //если фильм есть - удаляем
  if (isInStorage(movieObj, key)) {
    refQueueBtn.classList.remove('inStorage');
    refQueueBtn.textContent = 'ADD TO QUEUE';
    removeFromLocalStorage(movieObj, key);
    return;
  }

  //иначе добавляем в локал
  refQueueBtn.classList.add('inStorage');
  refQueueBtn.textContent = 'REMOVE QUEUE';
  addToLocalStorage(movieObj, key);
}

export { setMovieObj, addRemoveWatched, addRemoveQueue, getLocalStorageMovies, isInStorage };
