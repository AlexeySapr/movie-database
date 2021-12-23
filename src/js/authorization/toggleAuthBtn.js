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
    if (authBtnRefs) {
      refs.authBtn.querySelector('button').removeEventListener('click', onAuthInClick);
    }

    refs.authBtn.innerHTML = `
	  	<button class="sign-btn signOut">
          <span>Sign out</span>
        </button>`;
    refs.authBtn.querySelector('button').addEventListener('click', onAuthOutClick);
  } else {
    if (authBtnRefs) {
      refs.authBtn.querySelector('button').removeEventListener('click', onAuthOutClick);
    }

    refs.authBtn.innerHTML = `
		<button class="sign-btn signIn ">
          <span>Sign in</span>
        </button>`;
    refs.authBtn.querySelector('button').addEventListener('click', onAuthInClick);
  }
});

// onAuthStateChanged(auth, user => {
//   if (user) {
//     console.log(user.displayName);
//     return user;
//   } else {
//     console.log('User is signed out');
//   }
// });
