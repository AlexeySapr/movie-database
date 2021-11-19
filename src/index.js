import './sass/main.scss';

import debounce from 'lodash.debounce';
import card from './template/card-library.hbs';
import apiService from './js/api-service';

import movieCard from './template/movie-card.hbs';

const galleryList = document.querySelector('.list');
let listItems;
const searchForm = document.querySelector('.search-form');

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
    showMovies(movies.results);
  } catch (error) {
    console.error(error);
  }
}
/******************************************************** */

// galleryList.addEventListener('click', onClick);

async function onClick(event) {
  const movieID = event.currentTarget.dataset.idNumber;

  const movie = await apiService.getMovieById(movieID);

  galleryList.innerHTML = movieCard(movie);

  // console.log(movie);
  // alertID(movieID);

  // apiService.getMovieById(370172);
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

function showMovies(movies) {
  // galleryList.insertAdjacentHTML('beforeend', card(moviesArr));
  galleryList.innerHTML = card(movies);
}

// function alertID(id) {
//   alert('Film ID: ' + id);
// }
