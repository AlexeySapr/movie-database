import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { pagination } from './pagination';

import { refs } from './refs.js';
import { openModalCard } from './modal-film-card.js';
import { scrollToTop } from './up-btn.js';

import card from '../templates/film-card-template.hbs';
import SearchAPI from './apiService.js';

const apiService = new SearchAPI();

//Загружаем фильмы при загрузке страницы
// getData();

//Функция загрузки популярных фильмов
async function getData() {
  try {
    const movies = await apiService.getMovies();
    pagination.reset(movies.total_results);
    showMovies(movies.results);
  } catch (error) {
    console.error(error);
  }
}

function showMovies(movies) {
  refs.galleryList.innerHTML = card(movies);

  const cards = document.querySelectorAll('.film-list__item');
  cards.forEach(card => {
    card.addEventListener('click', openModalCard);
  });
}

/*******************поиск по запросу******************************* */
const DEBOUNCE_DELAY = 700;
refs.inputSearch.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));
refs.searchForm.addEventListener('submit', onInputSearch);

async function onInputSearch(event) {
  //при нажатии Enter - запрет перезагрузки страницы
  if (event.type === 'submit') {
    event.preventDefault();
  }

  //при вводе запроса - записываем его в свойство "searchQuery"
  if (event.type === 'input') {
    apiService.searchQuery = event.target.value.trim();
  }

  //сбрасываем страницу на первую
  apiService.ressetPage();

  //если запроса нет, т.е. пустая строка - грузим популярные фильмы
  if (!apiService.searchQuery) {
    Loading.standard();
    getData();
    Loading.remove();
    return;
  }

  //иначе делаем запрос по введенному
  try {
    Loading.standard();
    const movies = await apiService.getMovies();
    pagination.reset(movies.total_results);
    Loading.remove();

    if (movies.total_results > 0) {
      showMovies(movies.results);
      Notify.success(`Hooray! We found ${movies.total_results} movies.`);
    } else {
      refs.galleryList.innerHTML = '';
      Notify.failure('Oops, there is no movies with that name.');
    }
  } catch (error) {
    console.error(error);
  }
}

// Пагинация
pagination.on('afterMove', showNewPage);

async function showNewPage(event) {
  apiService.page = event.page;
  const movies = await apiService.getMovies();

  showMovies(movies.results);
  scrollToTop();
}
