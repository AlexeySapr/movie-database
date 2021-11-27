import { refs } from './refs.js';

const refsCloseModalLoginCard = refs.modalLoginCard.querySelector('.close-button-login');

refs.modalLogin.addEventListener('click', onLogin);

function onLogin(event) {
  event.preventDefault();

  refs.modalLoginCard.classList.remove('is-hidden');

  refsCloseModalLoginCard.addEventListener('click', toClickButtonClose);
}

function toClickButtonClose(event) {
  closeModalCard();
}

function closeModalCard() {
  refs.modalLoginCard.classList.add('is-hidden');
  refsCloseModalLoginCard.removeEventListener('click', toClickButtonClose);
  //   refs.modal.removeEventListener('click', toClickOnOverlay);
  //   window.removeEventListener('keydown', onEscKeyPress);
  //   document.body.classList.toggle('modal-open');
}
