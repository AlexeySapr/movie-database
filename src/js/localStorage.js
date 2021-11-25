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

  //   console.log(movieObj);
}

function addWatched(event) {
  const watchedMoviesArr = getWatchedMovies();
  watchedMoviesArr.push(movieObj);

  localStorage.setItem('watchedMovies', JSON.stringify(watchedMoviesArr));
}

function getWatchedMovies() {
  const res = JSON.parse(localStorage.getItem('watchedMovies'));
  return res ? res : [];
}

function addQueue(event) {
  const queueMoviesArr = getQueueMovies();
  queueMoviesArr.push(movieObj);

  localStorage.setItem('queueMovies', JSON.stringify(queueMoviesArr));
}

function getQueueMovies() {
  const res = JSON.parse(localStorage.getItem('queueMovies'));
  return res ? res : [];
}

export { setMovieObj, addWatched, addQueue };
