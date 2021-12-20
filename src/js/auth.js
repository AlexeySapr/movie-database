import { refs } from './refs.js';
// const localRefs = {
//   authBtn: document.querySelector('.sign-btn'),
//   libraryLink: document.querySelector('.library-link'),
// };

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
  refs.regFields.addEventListener('submit', onSubmit);
  refs.signFields.addEventListener('submit', onSubmit);
}

//закрытие модального окна
function onCloseBtn() {
  refs.modalAuthCard.classList.add('is-hidden');
  document.body.classList.toggle('modal-open');

  refs.closeModalAuthCard.removeEventListener('click', onCloseBtn);
  refs.regLink.removeEventListener('click', onRegBtnClick);
  refs.signLink.removeEventListener('click', onSingBtnClick);

  refs.regFields.removeEventListener('submit', onRegBtnClick);
  refs.signFields.removeEventListener('submit', onSingBtnClick);
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

//при сабмите формы
function onSubmit(event) {
  event.preventDefault();

  const { name, mail, password } = event.target.elements;
  const { className } = event.target;

  const user = {
    userName: className === 'register-modal-form' ? name.value : null,
    userEmail: mail.value,
    userPass: password.value,
  };

  console.log(user);
  //отправляем юзера
  //закрываем модалку
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
