/**************************firebase********************************* */
// Import the functions you need from the SDKs you need
// import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCSltsojn2ByRlj0ch6T0e6-gChUaJoDtY',
  authDomain: 'film-library-d58d7.firebaseapp.com',
  projectId: 'film-library-d58d7',
  storageBucket: 'film-library-d58d7.appspot.com',
  messagingSenderId: '948909391692',
  appId: '1:948909391692:web:601ac58d2f4fb6713c99e9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/**************************firebase********************************* */

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

const email = 'new@mail.ru';
const password = 'qwe123qwezxc';

// register(email, password);
async function register(email, password) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const userID = userCredential.user.uid;
  console.log(userID);
}

signIn(email, password);
async function signIn(email, password) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  console.log(userCredential);
}

// createUserWithEmailAndPassword(auth, email, password)
//   .then(userCredential => {
//     // Signed in
//     const user = userCredential.user;
//     console.log(user);
//     // ...
//   })
//   .catch(error => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
