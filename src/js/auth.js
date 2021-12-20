import { refs } from './refs.js';
// const localRefs = {
//   authBtn: document.querySelector('.sign-btn'),
//   libraryLink: document.querySelector('.library-link'),
// };

let isAuthModalOpen = false;

refs.libraryLink.addEventListener('click', onLibaryClick);
refs.authBtn.addEventListener('click', onAuthBtnClick);

//открытие модального окна
function onAuthBtnClick() {
  refs.modalAuthCard.classList.remove('is-hidden');
  document.body.classList.toggle('modal-open');

  refs.closeModalAuthCard.addEventListener('click', onCloseBtn);
  refs.regLink.addEventListener('click', onRegBtnClick);
  refs.signLink.addEventListener('click', onSingBtnClick);
}

//закрытие модального окна
function onCloseBtn() {
  refs.modalAuthCard.classList.add('is-hidden');
  document.body.classList.toggle('modal-open');

  refs.closeModalAuthCard.removeEventListener('click', onCloseBtn);
  refs.regLink.removeEventListener('click', onRegBtnClick);
  refs.signLink.removeEventListener('click', onSingBtnClick);
}

//при нажатии на кнопку регистрации
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
