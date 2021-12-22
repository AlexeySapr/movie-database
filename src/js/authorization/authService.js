import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import { refs } from '../refs.js';
import { onCloseBtn } from './auth-form.js';
import AuthService from '../firebase/firebaseService.js';
import { async } from '@firebase/util';

const authService = new AuthService();

async function registerUser(newUser) {
  Loading.standard();
  authService.user = newUser;
  try {
    const userId = await authService.register();
    if (userId) {
      refs.regFields.reset();
      onCloseBtn();
    }
    Loading.remove();
  } catch (error) {
    Loading.remove();
    Notify.failure(error.code);
    console.log(error.message);
  }
}

async function signInUser(signUser) {
  Loading.standard();
  authService.user = signUser;
  try {
    const userId = await authService.signIn();
    if (userId) {
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
  authService.user = {};
  try {
    await authService.signUserOut();
    Loading.remove();
  } catch (error) {
    Loading.remove();
    Notify.failure(error.code);
    console.log(error.message);
  }
}

// setTimeout(() => {
//   const name = authService.signInUserName;
//   console.log(name);
// }, 3000);

export { registerUser, signInUser, signOutUser };
