import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './refs.js';

//при нажатии на страницу библиотеки
refs.libraryLink.addEventListener('click', onLibaryClick);

function onLibaryClick(event) {
  event.preventDefault();
  const user = localStorage.getItem('user');
  console.log('user: ', user);

  if (user) {
    document.location.replace('./library.html');
  } else {
    Notify.warning('You need to sign in first!');
  }
}
