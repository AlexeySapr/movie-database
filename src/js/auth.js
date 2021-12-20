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
  isAuthModalOpen = true;
  refs.closeModalAuthCard.addEventListener('click', onCloseBtn);
}

//закрытие модального окна
function onCloseBtn() {
  refs.modalAuthCard.classList.add('is-hidden');
  document.body.classList.toggle('modal-open');
  isAuthModalOpen = false;
  refs.closeModalAuthCard.removeEventListener('click', onCloseBtn);
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
