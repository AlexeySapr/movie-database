import './sass/main.scss';

import pic from './images/emty.jpg';

const picObj = {
  pathToPic: pic,
};

// console.log(picObj);

import debounce from 'lodash.debounce';
import card from './template/card-library.hbs';
import apiService from './js/api-service';

import movieCard from './template/movie-card.hbs';

const galleryList = document.querySelector('.list');
let listItems;
const searchForm = document.querySelector('.search-form');

const refModal = document.querySelector('.modal');
const refBackdrop = document.querySelector('[data-modal]');

// function showMovies(somePic) {
//   galleryList.innerHTML = card(somePic);
// }

// showMovies();

/*******************поиск по запросу******************************* */
const inputRef = searchForm.querySelector('input');

const DEBOUNCE_DELAY = 1000;

inputRef.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

async function onInput(event) {
  const query = event.target.value.trim();
  if (!query) {
    console.log('emty string');
    getData();
    return;
  }

  try {
    const movies = await apiService.getMovies(query);
    // console.log(movies);
    showMovies(movies.results);

    galleryList.querySelectorAll('li').forEach(item => {
      item.addEventListener('click', onClick);
    });
  } catch (error) {
    console.error(error);
  }
}

getData();

async function getData() {
  try {
    const movies = await apiService.getMovies();
    // console.log(movies);
    showMovies(movies.results);
    listItems = galleryList.querySelectorAll('li');

    listItems.forEach(item => {
      item.addEventListener('click', onClick);
    });
  } catch (error) {
    console.error(error);
  }
}

async function onClick(event) {
  const movieID = event.currentTarget.dataset.idNumber;

  console.log(movieID);

  const movie = await apiService.getMovieById(movieID);

  refModal.innerHTML = movieCard(movie);
  document.body.classList.toggle('modal-open');
  refBackdrop.classList.toggle('is-hidden');

  window.addEventListener('keydown', onEscPressed);
  window.addEventListener('click', onWinClick);
}

/************************закрытие модалки****************************** */
function onEscPressed(event) {
  if (event.key === 'Escape') {
    console.log('Escape pressed');
    document.body.classList.toggle('modal-open');
    refBackdrop.classList.toggle('is-hidden');
  }

  window.removeEventListener('keydown', onEscPressed);
}

function onWinClick(event) {
  if (event.target.className === 'backdrop') {
    document.body.classList.toggle('modal-open');
    refBackdrop.classList.toggle('is-hidden');
    window.removeEventListener('click', onWinClick);
  }
}
/****************************************************** */

function showMovies(movies) {
  // galleryList.insertAdjacentHTML('beforeend', card(moviesArr));
  galleryList.innerHTML = card(movies);
}

/******************************************************** */
// getData()
//   .then(movies => {
//     showMovies(movies.results);
//   })
//   .then(addListenerOnFilmClick)
//   .catch(error => console.error(error));

// async function getData() {
//   return await apiService.getMovies();
// }

// function addListenerOnFilmClick() {
//   galleryList.querySelectorAll('li').forEach(item => {
//     item.addEventListener('click', onClick);
//   });
// }
/******************************************************** */
