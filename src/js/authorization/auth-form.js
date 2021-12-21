import { refs } from '../refs.js';
import { registerUser, signInUser } from './authService.js';

refs.libraryLink.addEventListener('click', onLibaryClick);
refs.authBtn.addEventListener('click', onAuthBtnClick);

//открытие модального окна
function onAuthBtnClick() {
  refs.modalAuthCard.classList.remove('is-hidden');
  document.body.classList.toggle('modal-open');

  //слушатели
  refs.closeModalAuthCard.addEventListener('click', onCloseBtn);
  refs.regLink.addEventListener('click', onRegBtnClick);
  refs.signLink.addEventListener('click', onSingBtnClick);

  //на сабмит
  refs.regFields.addEventListener('submit', onRegSubmit);
  refs.signFields.addEventListener('submit', onSignSubmit);
}

//закрытие модального окна
export function onCloseBtn() {
  refs.modalAuthCard.classList.add('is-hidden');
  document.body.classList.toggle('modal-open');

  refs.closeModalAuthCard.removeEventListener('click', onCloseBtn);
  refs.regLink.removeEventListener('click', onRegBtnClick);
  refs.signLink.removeEventListener('click', onSingBtnClick);

  refs.regFields.removeEventListener('submit', onRegSubmit);
  refs.signFields.removeEventListener('submit', onSignSubmit);
}

/*******смена формы***** */
function onRegBtnClick(event) {
  changeForm(event);
}

function onSingBtnClick(event) {
  changeForm(event);
}

function changeForm(event) {
  event.preventDefault();
  refs.regFields.classList.toggle('is-hidden');
  refs.signFields.classList.toggle('is-hidden');
}
/************************* */

//при сабмите регистр формы
function onRegSubmit(event) {
  event.preventDefault();
  const { name, mail, password } = event.target.elements;

  const user = {
    name: name.value,
    email: mail.value,
    password: password.value,
  };

  registerUser(user);
}

//при сабмите авторизац формы
function onSignSubmit(event) {
  event.preventDefault();
  const { mail, password } = event.target.elements;

  const user = {
    email: mail.value,
    password: password.value,
  };

  signInUser(user);
}

/****************************************** */

const flag = true;

function onLibaryClick(event) {
  if (flag) {
    event.preventDefault();
    console.log('click on lib');
    return;
  }

  console.log('move to lib');
}
