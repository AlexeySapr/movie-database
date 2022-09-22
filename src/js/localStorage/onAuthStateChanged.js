import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebaseData';
import { refs } from '../refs';
import { onAuthInClick, onAuthOutClick } from '../authorization/authModal';

// add/remove current user in local storage
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

    localStorage.setItem(
      'user',
      JSON.stringify({
        name: user.displayName,
        email: user.email,
      }),
    );
  } else {
    if (authBtnRefs.classList.contains('signOut')) {
      authBtnRefs.classList.remove('signOut');
      authBtnRefs.removeEventListener('click', onAuthOutClick);
    }

    authBtnRefs.classList.add('signIn');
    authBtnRefs.innerHTML = `<span>Sign in</span>`;
    authBtnRefs.addEventListener('click', onAuthInClick);

    localStorage.removeItem('user');
    // localStorage.removeItem('watchedMovies');
    // localStorage.removeItem('queueMovies');
  }
});
