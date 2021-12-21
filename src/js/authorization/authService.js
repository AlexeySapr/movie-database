import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import { refs } from '../refs.js';
import { onCloseBtn } from './auth-form.js';
import AuthService from '../firebase/firebaseService.js';

const authService = new AuthService();

async function regUser(newUser) {
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
    console.log(error.code);
  }
}

export { regUser };
