import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebaseData.js';
import { signOutUser } from './authService.js';

import { refs } from '../refs.js';

refs.libraryLink.addEventListener('click', onLibaryClick);

let flag = true;

function onLibaryClick(event) {
  if (flag) {
    event.preventDefault();
    console.log('click on lib');
    return;
  }

  console.log('move to lib');
}

onAuthStateChanged(auth, user => {
  if (user) {
    flag = false;
    console.log(user.displayName);
    // return user.displayName;
  } else {
    flag = true;
    console.log('User is signed out');
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
