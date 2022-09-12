import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { auth } from '../firebase/firebaseData.js';

import { refs } from '../refs.js';
import { onCloseBtn } from './authModal.js';

async function registerUser(newUser) {
  const { name, email, password } = newUser;
  Loading.standard();

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
    });

    if (userCredential.user.uid) {
      refs.regFields.reset();
      onCloseBtn();
    }
    Loading.remove();
    // location.reload();
  } catch (error) {
    Loading.remove();
    Notify.failure(error.code);
    console.log(error.message);
  }
}

async function signInUser(signUser) {
  const { email, password } = signUser;
  Loading.standard();
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    if (userCredential.user.uid) {
      refs.signFields.reset();
      onCloseBtn();
    }
    Loading.remove();
  } catch (error) {
    Loading.remove();
    Notify.failure(error.code);
    console.log(error.message);
  }
}

async function signOutUser() {
  Loading.standard();
  try {
    await signOut(auth);
    Loading.remove();
  } catch (error) {
    Loading.remove();
    Notify.failure(error.code);
    console.log(error.message);
  }
}

export { registerUser, signInUser, signOutUser };
