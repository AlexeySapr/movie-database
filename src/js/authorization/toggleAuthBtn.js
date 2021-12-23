import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebaseData.js';
import { refs } from '../refs.js';
import { onAuthInClick, onAuthOutClick } from './auth-form.js';

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

    localStorage.setItem('userName', JSON.stringify(user.displayName));
  } else {
    if (authBtnRefs.classList.contains('signOut')) {
      authBtnRefs.classList.remove('signOut');
      authBtnRefs.removeEventListener('click', onAuthOutClick);
    }

    authBtnRefs.classList.add('signIn');
    authBtnRefs.innerHTML = `<span>Sign in</span>`;
    authBtnRefs.addEventListener('click', onAuthInClick);

    localStorage.removeItem('userName');
  }
});
