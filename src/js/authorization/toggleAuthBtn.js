import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebaseData.js';
import { refs } from '../refs.js';
import { onAuthInClick, onAuthOutClick } from './auth-form.js';
import { signOutUser } from './authService.js';

refs.libraryLink.addEventListener('click', onLibaryClick);

function onLibaryClick(event) {
  event.preventDefault();
  const user = auth.currentUser;

  if (user) {
    document.location.replace('./library.html');
  } else {
    Notify.warning('You need to sign in first!');
  }
}

onAuthStateChanged(auth, user => {
  const authBtnRefs = refs.authBtn.querySelector('button');
  if (user) {
    if (authBtnRefs.classList.contains('signIn')) {
      authBtnRefs.classList.remove('signIn');
      authBtnRefs.removeEventListener('click', onAuthInClick);
    }

    authBtnRefs.classList.add('signOut');
    authBtnRefs.innerHTML = `<span>Sign out</span>`;
    authBtnRefs.addEventListener('click', onAuthOutClick);

    addUsernameToLocalStorage(user.displayName);
  } else {
    if (authBtnRefs.classList.contains('signOut')) {
      authBtnRefs.classList.remove('signOut');
      authBtnRefs.removeEventListener('click', onAuthOutClick);
    }

    authBtnRefs.classList.add('signIn');
    authBtnRefs.innerHTML = `<span>Sign in</span>`;
    authBtnRefs.addEventListener('click', onAuthInClick);
    removeUsernameFromLocalStorage();
  }
});

function addUsernameToLocalStorage(userName) {
  localStorage.setItem('userName', JSON.stringify(userName));
}

function removeUsernameFromLocalStorage() {
  localStorage.setItem('userName', JSON.stringify(''));
}
