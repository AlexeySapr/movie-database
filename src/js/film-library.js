import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import { refs } from '../js/refs.js';
import { showMoviesCards } from './modal-film-card.js';
import { scrollToTop } from './up-btn.js';

import { pagination } from './pagination.js';
import { getLocalStorageMovies } from './localStorage.js';

const currentPage = {
  watched: true,
  queue: false,
};

window.addEventListener('load', onWatchedBtnClick);
refs.watchedBtn.addEventListener('click', onWatchedBtnClick);
// refs.queueBtn.addEventListener('click', onQueueBtnClick);

function onWatchedBtnClick() {
  refs.watchedBtn.classList.add('filter__btn--current');
  refs.queueBtn.classList.remove('filter__btn--current');

  currentPage.watched = true;
  currentPage.queue = false;

  if (!getLocalStorageMovies('watchedMovies').length) {
    Notify.failure('Your watched list is empty. Add any movie.');
    refs.emptyLibrary.classList.remove('hidden');
    pagination.reset(0);
    refs.galleryList.innerHTML = '';
    return;
  }

  Loading.standard();
  const moviesArr = getLocalStorageMovies('watchedMovies');

  // console.log(moviesArr);
  pagination.reset(moviesArr.length);
  moviesArr.splice(20);
  refs.emptyLibrary.classList.add('hidden');
  showMoviesCards(moviesArr);
  Loading.remove();
}

// function onQueueBtnClick() {
//   refs.queueBtn.classList.add('filter__btn--current');
//   refs.watchedBtn.classList.remove('filter__btn--current');

//   currentPage.watched = false;
//   currentPage.queue = true;

//   if (!localStorage.getItem('QUEUE')) {
//     Notify.failure('Your queue list is empty. Add any movie.');
//     pagination.reset(0);
//     refs.galleryList.innerHTML = '';
//     return;
//   }

//   Loading.standard();
//   const moviesArr = getLocalStorageDataByKey(`QUEUE`);
//   pagination.reset(moviesArr.length);
//   moviesArr.splice(20);
//   showMoviesCards(moviesArr);
//   Loading.remove();
// }

// function getLocalStorageDataByKey(key) {
//   const data = localStorage.getItem(key);
//   const parsedData = JSON.parse(data);
//   const moviesArr = parsedData[key.toLowerCase()];

//   moviesArr.forEach(movie => {
//     const genresArr = movie.genres.split(', ');
//     if (genresArr.length > 2) {
//       genresArr.splice(2, genresArr.length, 'Other');
//     }
//     movie.genre_ids = movie.genres ? genresArr.join(', ') : 'undefined';
//     movie.release_date = movie.release_date ? movie.release_date.slice(0, 4) : 'undefined';
//   });

//   return moviesArr;
// }

pagination.on('afterMove', showNewPage);

function showNewPage(event) {
  let moviesArr;

  if (currentPage.watched) {
    moviesArr = getLocalStorageDataByKey(`WATCHED`);
  } else if (currentPage.queue) {
    moviesArr = getLocalStorageDataByKey(`QUEUE`);
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
