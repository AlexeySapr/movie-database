import './sass/main.scss';

import card from './template/card.hbs';
import apiService from './js/api-service';

const galleryList = document.querySelector('.list');
const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  getData();
}

async function getData() {
  try {
    const movies = await apiService.getMovies();
    const moviesArr = movies.results;

    const genresList = await apiService.getGenres().then(obj => obj.genres);

    moviesArr.forEach(movie => {
      movie.genre_ids = Genres(genresList, movie.genre_ids);
      movie.release_date = getYear(movie.release_date);
    });

    galleryList.insertAdjacentHTML('beforeend', card(moviesArr));
  } catch (error) {
    console.error(error);
  }
}

function getYear(date) {
  return date.slice(0, 4);
}

function Genres(genresArray, idArray) {
  const resArr = [];
  idArray.forEach(id => {
    for (let i = 0; i < genresArray.length; i++) {
      genresArray[i].id === id ? resArr.push(genresArray[i].name) : undefined;
    }
  });
  return resArr.join(', ');
}
