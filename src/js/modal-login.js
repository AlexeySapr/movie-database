import { refs } from './refs.js';

const refsCloseModalRegisterCard = refs.modalRegisterCard.querySelector('.register-close-button');
const refsRegisterForm = refs.modalRegisterCard.querySelector('.register-modal-form');

//отправка формы
refsRegisterForm.addEventListener('submit', onFormRegisterSubmit);

function onFormRegisterSubmit(event) {
  event.preventDefault();

  const user = {
    userName: event.target.name.value,
    userTel: event.target.tel.value,
    userEmail: event.target.mail.value,
  };
  console.log(user);
  event.target.reset();
}

//открытие модального окна
refs.modalRegister.addEventListener('click', onRegisterClick);

function onRegisterClick(event) {
  event.preventDefault();

  refs.modalRegisterCard.classList.remove('is-hidden');
  document.body.classList.toggle('modal-open');

  refsCloseModalRegisterCard.addEventListener('click', toClickButtonClose);
}

//закрытие модального окна
function toClickButtonClose(event) {
  closeModalCard();
}

function closeModalCard() {
  refs.modalRegisterCard.classList.add('is-hidden');
  document.body.classList.toggle('modal-open');
  refsCloseModalRegisterCard.removeEventListener('click', toClickButtonClose);
  //   refs.modal.removeEventListener('click', toClickOnOverlay);
  //   window.removeEventListener('keydown', onEscKeyPress);
  //   document.body.classList.toggle('modal-open');
}
