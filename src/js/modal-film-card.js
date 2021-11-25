import { refs } from './refs.js';
import SearchAPI from './apiService';
import modalCard from '../templates/modal-film-card-template.hbs';

const apiService = new SearchAPI();

export function openModalCard(evt) {
  refs.modalCard.innerHTML = '';
  refs.buttonClose.addEventListener('click', toClickButtonClose);
  refs.modal.addEventListener('click', toClickOnOverlay);
  window.addEventListener('keydown', onEscKeyPress);

  if (evt) {
    refs.modal.classList.remove('is-hidden');
  }
  const filmId = evt.currentTarget.dataset.idNumber;

  getFilmInfo(filmId);
}

async function getFilmInfo(filmId) {
  try {
    const filmInfo = await apiService.getMovieById(filmId);
    cardMarkup(filmInfo);
  } catch (error) {
    console.error(error);
  }
}

function cardMarkup(filmInfo) {
  refs.modalCard.innerHTML = modalCard(filmInfo);
}

function closeModalCard() {
  refs.modal.classList.add('is-hidden');
  refs.buttonClose.removeEventListener('click', closeModalCard);
  refs.modal.removeEventListener('click', toClickOnOverlay);
  window.removeEventListener('keydown', onEscKeyPress);
}

function toClickButtonClose(evt) {
  if (evt) {
    closeModalCard();
  }
}

function onEscKeyPress(evt) {
  if (evt.code === 'Escape') {
    closeModalCard();
  }
}

function toClickOnOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closeModalCard();
  }
}
