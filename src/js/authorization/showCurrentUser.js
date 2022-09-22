import { refs } from '../refs.js';

const currentUser = JSON.parse(localStorage.getItem('user'));
refs.authUser.innerHTML = `You sign in as "${currentUser.name}"`;
