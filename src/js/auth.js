import { refs } from './refs.js';
// const localRefs = {
//   authBtn: document.querySelector('.sign-btn'),
//   libraryLink: document.querySelector('.library-link'),
// };

refs.libraryLink.addEventListener('click', onLibaryClick);
refs.authBtn.addEventListener('click', onAuthBtnClick);

function onAuthBtnClick(event) {
  console.log('click on auth');
  refs.modalAuthCard.classList.remove('is-hidden');
  document.body.classList.toggle('modal-open');
}

const flag = true;

function onLibaryClick(event) {
  if (flag) {
    event.preventDefault();
    console.log('click on lib');
    return;
  }

  console.log('move to lib');
}

//открытие модального окна
// refs.modalRegister.addEventListener('click', onRegisterClick);

// function onRegisterClick(event) {
//   event.preventDefault();

//   refs.modalRegisterCard.classList.remove('is-hidden');
//   document.body.classList.toggle('modal-open');

//   refsCloseModalRegisterCard.addEventListener('click', toClickButtonClose);
// }
