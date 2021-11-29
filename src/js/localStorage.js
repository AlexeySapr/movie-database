const movieObj = {};

// const isMovieInStorage = {
//   isWatched: false,
//   isQueue: false,
// };

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

  //   console.log(movieObj);
}

function isInWatched(movieObj) {
  return getWatchedMovies().some(movie => {
    return movie.id === movieObj.id;
  });
}

// function isInStorage(moviesArr) {
//   return moviesArr.some(movie => {
//     return movie.id === movieObj.id;
//   });
// }ADD TO WATCHED

function removeFromWatchedLocalStorage(movieObj) {
  const newMoviesArr = getWatchedMovies().filter(movie => movie.id != movieObj.id);
  localStorage.setItem('watchedMovies', JSON.stringify(newMoviesArr));
}

function addToWatchedLocalStorage(movieObj) {
  const watchedMoviesArr = getWatchedMovies();
  watchedMoviesArr.push(movieObj);
  localStorage.setItem('watchedMovies', JSON.stringify(watchedMoviesArr));
}

function addRemoveWatched(event) {
  const refWatchBtn = document.querySelector('.modal__watch-list');

  //если фильм есть - удаляем
  if (isInWatched(movieObj)) {
    console.log('InStorage');
    refWatchBtn.classList.remove('inStorage');
    refWatchBtn.textContent = 'ADD TO WATCHED';
    removeFromWatchedLocalStorage(movieObj);
    return;
  }

  //иначе добавляем в локал
  console.log('need to add to storage');
  refWatchBtn.classList.add('inStorage');
  refWatchBtn.textContent = 'REMOVE FROM WATCHED';
  addToWatchedLocalStorage(movieObj);
}

function getWatchedMovies() {
  const res = JSON.parse(localStorage.getItem('watchedMovies'));
  return res ? res : [];
}

function addQueue(event) {
  const queueMoviesArr = getQueueMovies();

  // if (isInStorage(queueMoviesArr)) {
  //   console.log('InStorage');
  //   return;
  // }

  queueMoviesArr.push(movieObj);
  localStorage.setItem('queueMovies', JSON.stringify(queueMoviesArr));
}

function getQueueMovies() {
  const res = JSON.parse(localStorage.getItem('queueMovies'));
  return res ? res : [];
}

export { setMovieObj, addRemoveWatched, addQueue, getWatchedMovies, isInWatched };
