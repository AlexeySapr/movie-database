import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebaseData.js';

onAuthStateChanged(auth, user => {
  if (user) {
    console.log(user.displayName);
    return user;
  } else {
    console.log('User is signed out');
  }
});

// import { authService } from './authService.js';

// console.log(authService.isUserSign());

/****************************************** */

// const flag = false;

// refs.libraryLink.addEventListener('click', onLibaryClick);

// function onLibaryClick(event) {
//   if (flag) {
//     event.preventDefault();
//     console.log('click on lib');
//     return;
//   }

//   console.log('move to lib');
// }
